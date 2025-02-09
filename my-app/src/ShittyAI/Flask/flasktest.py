from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Enable CORS for frontend communication
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///chat_history.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Configure Google Gemini API
API_KEY = "Your_API_Key"
genai.configure(api_key=API_KEY)

# Define the Conversation Model
class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_query = db.Column(db.String(500), nullable=False)
    answer = db.Column(db.String(2000), nullable=False)

# Create database
with app.app_context():
    db.create_all()

# Function to call Gemini AI
def ask_gemini(query):
    model = genai.GenerativeModel("gemini-1.5-flash")

    # Retrieve convo history from db
    history = Conversation.query.all()
    context = "\n".join([f"User: {item.user_query}\nGemini: {item.answer}" for item in history])
    
    full_prompt = f"{context}\n\nUser: {query}"
    response = model.generate_content(full_prompt)

    return response.text if response else "No response from Gemini."

# API Endpoint: Get Chat History
@app.route("/history", methods=["GET"])
def get_history():
    history = Conversation.query.order_by(Conversation.id.desc()).all()
    return jsonify([{"user_query": item.user_query, "answer": item.answer} for item in history])

# API Endpoint: Ask Gemini AI
@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    query = data.get("query")

    if not query:
        return jsonify({"error": "Query is required"}), 400

    answer = ask_gemini(query)

    try:
        conversation = Conversation(user_query=query, answer=answer)
        db.session.add(conversation)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

    return jsonify({"user_query": query, "answer": answer})

if __name__ == "__main__":
    app.run(debug=True,port=5000)
