import React from "react";

const Chapters = ({ chapters }) => {
  return (
    <>
        {chapters.map((chapter) =>
          chapter.valid ? (
            <li
              key={chapter.id}
              className="chapter"
            >
              <img src={chapter.url} alt={chapter.title} />
              <p>{chapter.title}</p>
            </li>
          ) : (
            <li key={chapter.id} style={{ color: "grey" }} className="chapter">
              <img src={chapter.url} alt={chapter.title} />
              <p>{chapter.title}</p>
            </li>
          )
        )}
    </>
  );
};

export default Chapters;
