import React, { useState } from 'react';
import './style.css';

export const Joke = (props) => {
  const [thumbUp, setThumbUp] = useState(props.likes);
  const [thumbDown, setThumbDown] = useState(props.dislikes);

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src={`../assets/img-users/${props.userId}.png`}
              />
              <p className="user-name">{props.userName}</p>
            </div>

            <p className="joke__text">{props.text}</p>
          </div>
          <div className="joke__likes">
            <button
              id="btn-up"
              className="btn-like btn-like--up"
              onClick={() => {
                setThumbUp(thumbUp + 1);
              }}
            ></button>
            <span id="likes-up" className="likes-count likes-count--up">
              {thumbUp}
            </span>
            <button
              id="btn-down"
              className="btn-like btn-like--down"
              onClick={() => {
                setThumbDown(thumbDown + 1);
              }}
            ></button>
            <span id="likes-down" className="likes-count likes-count--down">
              {thumbDown}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
