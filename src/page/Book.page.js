import React from 'react';
import Books from '../components/Books';
import { useState } from 'react';

const BookPage = () => {

    const [all, setAll] = useState(true);
  const [level1, setLevel1] = useState(false);
  const [level2, setLevel2] = useState(false);
  const [level3, setLevel3] = useState(false);
  const [level5, setLevel5] = useState(false);
  const [level4, setLevel4] = useState(false);
  const [level6, setLevel6] = useState(false);




    return (
        <div className='myApp'>

        <header>
        <nav>
            <span className={all ? "activeNav" : ""} onClick={() => { setAll(true); setLevel1(false); setLevel2(false); setLevel3(false); setLevel4(false); setLevel5(false); setLevel6(false); }}>All</span>
            <span className={level1 ? "activeNav" : ""} onClick={() => { setAll(false); setLevel1(true); setLevel2(false); setLevel3(false); setLevel4(false); setLevel5(false); setLevel6(false); }}>Level 1</span>
            <span className={level2 ? "activeNav" : ""} onClick={() => { setAll(false); setLevel1(false); setLevel2(true); setLevel3(false); setLevel4(false); setLevel5(false); setLevel6(false); }}>Level 2</span>
            <span className={level3 ? "activeNav" : ""} onClick={() => { setAll(false); setLevel1(false); setLevel2(false); setLevel3(true); setLevel4(false); setLevel5(false); setLevel6(false); }}>Level 3</span>
            <span className={level4 ? "activeNav" : ""} onClick={() => { setAll(false); setLevel1(false); setLevel2(false); setLevel3(false); setLevel4(true); setLevel5(false); setLevel6(false); }}>Level 4</span>
            <span className={level5 ? "activeNav" : ""} onClick={() => { setAll(false); setLevel1(false); setLevel2(false); setLevel3(false); setLevel4(false); setLevel5(true); setLevel6(false); }}>Level 5</span>
            <span className={level6 ? "activeNav" : ""} onClick={() => { setAll(false); setLevel1(false); setLevel2(false); setLevel3(false); setLevel4(false); setLevel5(false); setLevel6(true); }}>Level 6</span>
        </nav>

        </header>


            <Books all={all} level1={level1} level2={level2} level3={level3} level4={level4} level5={level5} level6={level6} />
            
        </div>
    );
};

export default BookPage;