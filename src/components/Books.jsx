import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Chapters from "./Chapters";

const Books = ({ all, level1, level2, level3, level4, level5, level6 }) => {
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    axios
      .post("https://api.lelivrescolaire.fr/graphql", {
        query:
          "query{viewer{books{hits{id displayTitle url subjects{name}levels{name}valid}}}}",
        variables: {},
      })
      .then((response) => {
        setBooks(response.data.data.viewer.books.hits);
      });
  }, []);

  useEffect(() => {
    if (selectedBook) {
      axios
        .post("https://api.lelivrescolaire.fr/graphql", {
          query:
            "query chapters($bookId:Int){viewer{chapters(bookIds:[$bookId]){hits{id title url valid}}}}",
          variables: {
            bookId: selectedBook.id,
          },
        })
        .then((response) => {
          setChapters(response.data.data.viewer.chapters.hits);
        });
    }
  }, [selectedBook]);

  const handleBookClick = (book) => {
   
    document.querySelector(".chapters").classList.add('show_chapters');
    document.getElementById(book.id).classList.add("selected");
    setSelectedBook(book);
  };

  return (
    <>
      <div className="books">

        {all &&
          books.map((book) =>
            book.valid ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book desactiveted"
              >
                <span className="san_deasctiveted">DISABLE</span>
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            )
          )}

        {level1 &&
          books.map((book) =>
            book.valid === true && book.levels[0].name === "1re" ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : null
          )}

        {level2 &&
          books.map((book) =>
            book.valid === true && book.levels[0].name === "2de" ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : null
          )}

        {level3 &&
          books.map((book) =>
            book.valid === true && book.levels[0].name === "3ème" ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : null
          )}

        {level4 &&
          books.map((book) =>
            book.valid === true && book.levels[0].name === "4ème" ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : null
          )}

        {level5 &&
          books.map((book) =>
            book.valid === true && book.levels[0].name === "5ème" ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : null
          )}

        {level6 &&
          books.map((book) =>
            book.valid === true && book.levels[0].name === "6ème" ? (
              <li
                key={book.id}
                id={book.id}
                onClick={() => handleBookClick(book)}
                className="book"
              >
                <img src={book.url} alt={book.displayTitle} />
                <p>{book.displayTitle}</p>
              </li>
            ) : null
          )}
      </div>

      <div
        className="chapters"
      >
        <i 
        className="fas fa-times"
        onClick={() => { document.querySelector(".chapters").classList.remove('show_chapters') }}
        ></i>
        <h1>Chapters</h1>

        <Chapters chapters={chapters} />
      </div>
    </>
  );
};

export default Books;
