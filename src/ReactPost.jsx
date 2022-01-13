import React, { useState } from "react";
import PostLiked from "./PostLiked";

const ReactPost = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [likePost, setLikePost] = useState(false);
  
  return (
    <article className="question">
      <header>
        <h5>{question}</h5>
        <button onClick={() => setShowInfo(!showInfo)}>Visa svaret</button>
      </header>

      {showInfo && <p>{answer}<button onClick={() => setLikePost(!likePost)}>Like it</button></p>};
      {likePost && <PostLiked />}
    </article>
  );
};
export default ReactPost;