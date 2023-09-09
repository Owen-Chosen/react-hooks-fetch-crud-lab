import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [Questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(questions => setQuestions(questions))
  },[page])


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setPage={setPage}/> : <QuestionList setPage={setPage} questions={Questions}/>}
    </main>
  );
}

export default App;
