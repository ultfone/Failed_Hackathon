import React, { useState } from 'react';
import './fnq.css';

export default function Fnq() {
  const faqData = [
    {
      question: "What is Logi-Links?",
      answer: "We're a collaborative platform designed to optimize business networks and logistics for a sustainable future. We connect businesses, facilitate partnerships, and provide streamlined logistics solutions to enhance efficiency and reduce costs.",
    },
    {
      question: "How does Logi-Links benefit my business?",
      answer: "Our platform offers two key benefits:\n1. Expanded Network: Connect with potential partners, suppliers, and customers to grow your business.\n2. Optimized Logistics: Streamline your transportation, warehousing, and delivery operations with our efficient and sustainable solutions.",
    },
    {
      question: "Who is the target audience for Logi-Links?",
      answer: "Our platform is ideal for:\n- Small and Medium Enterprises (SMEs)\n- Logistics and supply chain companies\n- E-commerce businesses\n- Sustainable and eco-conscious organizations\n- Business incubators and accelerators",
    },
    {
      question: "How does the business network aspect work?",
      answer: "Our platform provides a directory of businesses, allowing you to search for and connect with potential partners based on industry, location, or other criteria. You can communicate directly with other members, share resources, and collaborate on projects.",
    },
    {
      question: "What types of logistics solutions do you offer?",
      answer: "We offer a range of logistics solutions tailored to different business needs, including:\n- Transportation Management\n- Warehousing Solutions\n- Real-time Tracking and Analytics\n- Order Management Tools\n- Sustainable Transportation Options (Electric Vehicle Fleets)",
    },
    {
      question: "What is your commitment to sustainability?",
      answer: "We prioritize sustainability by integrating green logistics practices into our operations and offering eco-friendly transportation options like electric vehicle fleets. We also optimize delivery routes to minimize emissions and environmental impact.",
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer tiered subscription plans designed to meet the needs of different business sizes. Contact us for a detailed pricing breakdown and to discuss a customized solution for your specific requirements.",
    },
    {
      question: "What is your commercial model?",
      answer: "We operate on a tiered subscription model, providing different levels of access and features based on your business needs. We also offer custom solutions for enterprise clients.",
    },
    {
      question: "Is your platform customizable?",
      answer: "While our core platform offers a robust set of features, we recognize that each business is unique. We can tailor and configure the platform to seamlessly integrate with your existing systems and fulfill your specific logistical requirements.",
    },
    {
      question: "How do you handle unexpected disruptions or unforeseen events?",
      answer: "Our platform incorporates real-time data feeds and allows for manual adjustments to maintain accurate forecasting even during unexpected events. Our algorithms and models are constantly updated to adapt to dynamic conditions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {faqData.map((item, index) => (
        <div className="faq-item">
          <div
            className={`faq-question ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
          </div>
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === index ? "500px" : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease-out, padding 0.3s ease-out",
              padding: openIndex === index ? "15px" : "0 15px",
            }}
          >
            {item.answer.split("\n").map((line ) => (
              <p >{line}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
