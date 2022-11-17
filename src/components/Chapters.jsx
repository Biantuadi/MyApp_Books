import React from 'react';

const Chapters = ({chapters, selectedBook}) => {
    return (
        <>

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
          
        </>
    );
};

export default Chapters;