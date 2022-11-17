// import React, { useEffect, UseState } from "react";

const allLevels = ({books}, {setSelectedBook}) => {

    
    
    return (
        <>
            { books.map((book) => (
            (book.valid) ? (
              
            <li key={book.id} onClick={() => setSelectedBook(book)} id={book.id}>
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
        </>
    );
};

export default allLevels;