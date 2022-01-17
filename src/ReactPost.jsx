import React, { useState } from "react";
import PostLiked from "./PostLiked";
import {FcLike} from 'react-icons/fc';
import {BsFillCaretDownFill} from'react-icons/bs';


const ReactPost = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [likePost, setLikePost] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{question}</h5>
        <button className='ansver'onClick={() => setShowInfo(!showInfo)}><BsFillCaretDownFill /></button>
      </header>

      {showInfo && <p>{answer}<button className='like' onClick={() => setLikePost(!likePost)}>Like <FcLike /></button></p>};
      {likePost && <PostLiked />}
    </article>
  );
};
export default ReactPost;