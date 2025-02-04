import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "./logiclink.png";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/history").then((response) => {
      setMessages(response.data);
    });
  }, []);

  const handleSend = async () => {
    if (!query) return;

    const userMessage = { user_query: query, answer: "Thinking..." };
    setMessages((prev) => [userMessage, ...prev]);

    try {
      const response = await axios.post("http://127.0.0.1:5000/ask", { query });
      setMessages((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Error: ", error);
    }

    setQuery("");
  };

  const handleReset = () => {
    setMessages([]); // Clear chat history
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "#2a5cbf", fontSize: "24px", fontWeight: "bolder" }}>
            <img src={logo} alt="logo" className="logoimg" style={{ height: "5vh", width: "5vh" }} />
            Logi-Links
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/fnq">F&Q</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/details">Company details</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <button className="ai" onClick={() => setShowModal(true)}>Ask Your Personal ChatBot</button>
        </Container>
      </Navbar>

      {/* Modal for ChatBot */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Gemini AI Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="chat-messages">
            {messages.length === 0 ? (
              <p>No chat history. Start a conversation!</p>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className="chat-message">
                  <strong>User:</strong> {msg.user_query} <br />
                  <strong>Gemini:</strong> {msg.answer}
                </div>
              ))
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask something..."
            className="form-control"
          />
          <Button variant="primary" onClick={handleSend}>Send</Button>
          <Button variant="danger" onClick={handleReset}>Reset</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
