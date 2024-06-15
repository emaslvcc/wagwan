import React, { useState } from 'react';
import axios from 'axios';
import './Questionnaire.css'; // Ensure this file exists in the same directory

function Questionnaire() {
  const [questions] = useState([
    "How was your week?",
    "What were your biggest challenges?",
    "What are your plans for next week?",
    "Any additional comments?"
  ]);
  const [answers, setAnswers] = useState({});

  const handleChange = (e, index) => {
    const newAnswers = { ...answers, [index]: e.target.value };
    setAnswers(newAnswers);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // For demonstration, bypass the actual submission and just log the answers
    console.log('Submitted answers:', answers);
    alert('Questionnaire submitted successfully!');
  };

  return (
    <div className="Questionnaire">
      <h1>Weekly Questionnaire</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="question-container">
            <label>{question}</label>
            <textarea
              value={answers[index] || ''}
              onChange={(e) => handleChange(e, index)}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Questionnaire;
