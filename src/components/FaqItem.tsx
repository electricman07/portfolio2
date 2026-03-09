import React from "react";
import { useState } from "react";

const FaqItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div key={id} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question p-2.5 my-2.5 mx-0 cursor-pointer rounded-xl bg-(--bg-background) flex justify-between">
        <div>
          <strong>{question} </strong>
        </div>
        <div>{isOpen ? "-" : "+"}</div>
      </div>
      <div>
        {isOpen && (
          <div className="faq-answer m-0 p-2.5 bg-(--bg-background) rounded-xl">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
