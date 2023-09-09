import React from "react";

function QuestionItem({ question, callSetPage, questionNum }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteButton (event) {
    fetch(`http://localhost:4000/questions/${event.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(res => res.json())
    .then(data => callSetPage())
  }

  function handleChange (event) {
    console.log(event.target.value)
    fetch(`http://localhost:4000/questions/${event.target.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ correctIndex: parseInt(event.target.value, 10) })
    }).then(res => res.json())
    .then(data => {callSetPage(); console.log(data); callSetPage()})
  }

  return (
    <li>
      <h4>Question {questionNum}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} id={id} defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={handleDeleteButton}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
