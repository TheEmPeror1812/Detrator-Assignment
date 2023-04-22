import React, { useState } from "react";
import { Dialog } from "@mui/material";
import "./Card.css";

function Card({ id, usedId, title, body, tags, reactions }) {
  const [storyToggle, SetStoryToggle] = useState(false);

  return (
    <div className="card-container">
      <div className="body">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="options">
        <div>
          {/*using this div to make tags in different line than reaction} */}
          <span>Tags : </span>
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              {tag},
            </span>
          ))}
        </div>
        <p>Reactions : {reactions}</p>

        <Dialog open={storyToggle} onClose={() => SetStoryToggle(!storyToggle)}>
          <div className="DialogBox">
            <h2>{title}</h2>
            <h4>{body}</h4>
            <div>
              {/*using this div to make tags in different line than reaction} */}
              <span>Tags : </span>
              {tags.map((tag, index) => (
                <span className="tag" key={index}>
                  {tag},
                </span>
              ))}
            </div>
            <p>Reactions : {reactions}</p>
          </div>
        </Dialog>
      </div>
      <button className="btn" onClick={() => SetStoryToggle(!storyToggle)}>
        Read Full..
      </button>
    </div>
  );
}

export default Card;
