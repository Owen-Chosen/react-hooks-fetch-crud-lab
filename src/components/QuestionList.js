import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ setPage, questions}) {

  let count = 1;

  function callSetPage () {
    setPage("Form")
    setPage("List")
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => {
        return <QuestionItem callSetPage={callSetPage}
         key={question.id} questionNum={count++}
          question={question}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
