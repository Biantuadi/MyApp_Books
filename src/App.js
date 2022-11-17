import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
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
  

  

  return (
    <div className="myApp">
      <div className="books">
        <h1>Books</h1>

        

        <ul>

        { books.map((book) => (
            (book.valid) ? (
              
            <li className="book" key={book.id} onClick={() => {
              const liId = document.querySelectorAll(".book");
              liId.forEach((li) => {
                li.classList.remove("selected");
              });
              document.getElementById(book.id).classList.add("selected");
              setSelectedBook(book);

            }} id={book.id}>
              <img src={book.url} alt={book.displayTitle} />
              <p>{book.displayTitle}</p>
            </li>
            ) : (
              <li key={book.id} onClick={() => setSelectedBook(book)} style={{color: "grey"}}>
              <img src={book.url} alt={book.displayTitle} />
              <p>{book.displayTitle}</p>
            </li>
            )
            )) 
          } 

        </ul>
      </div>

      <div className="chapters">
        <h1>Chapters</h1>

        <ul>
          {chapters.map((chapter) => (
            (chapter.valid) ? (
              <li key={chapter.id} onClick={() => {
                const book = books.find(book => book.id === selectedBook.id);
                const liBook = document.getElementById(book.id);
                if (liBook) {
                  window.location.href = "#"+book.id;
                } 
              }}>
              <img src={chapter.url} alt={chapter.title} />
              <p>{chapter.title}</p>
            </li>
            ) : (
              <li key={chapter.id}  style={{color: "grey"}}>
              <img src={chapter.url} alt={chapter.title} />
              <p>{chapter.title}</p>
            </li>
            )
          ))}
              
        </ul>
      </div>
    </div>
  );
}

export default App;
