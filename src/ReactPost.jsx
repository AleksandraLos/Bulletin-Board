import React, { useState } from "react";

const ReactPost = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <article className="question">
      <header>
        <h5>{question}</h5>
        <button onClick={() => setShowInfo(!showInfo)}>Visa svaret</button>
      </header>
      {showInfo && <p>{answer}<button>Like it</button></p>}
    </article>
  );
};
export default ReactPost;