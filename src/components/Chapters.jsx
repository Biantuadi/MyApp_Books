import React from "react";

const Chapters = ({ chapters, selectedBook, books }) => {
  return (
    <>
      <div className="chapters_container">
        {chapters.map((chapter) =>
          chapter.valid ? (
            <li
              key={chapter.id}
              onClick={() => {
                const book = books.find((book) => book.id === selectedBook.id);
                const containerChapters = document.querySelector(".chapters");
                // containerChapters.classList.add = "none";
              }}
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
      </div>
    </>
  );
};

export default Chapters;
