




// code ...





import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const myApp = () => { 
    const [books, setBooks] = useState([]);
    const [chapters, setChapters] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        axios.get('https://api.lelivrescolaire.fr/graphql', {
            query: "query{viewer{books{hits{id displayTitle url subjects{name}levels{name}valid}}}}",
            variables: {}
        })
        .then(res => {
            setBooks(res.data);
        }) 
        .catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        axios.get('https://api.lelivrescolaire.fr/graphql', {
            query: "query chapters($bookId:Int){viewer{chapters(bookIds:[$bookId]){hits{id title url valid}}}}",
            variables: {
                "bookId": 1339497
            }
        })
        .then(res => {
            setChapters(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>{book.displayTitle}</li>
                ))}
            </ul>
            <h1>Chapters</h1>
            <ul>
                {chapters.map(chapter => (
                    <li key={chapter.id}>{chapter.title}</li>
                ))}
            </ul>
        </div>
    );

}


export default myApp;