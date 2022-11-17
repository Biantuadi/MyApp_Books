import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import chapters from './chapters';
// import Books from './components/Books';

const routesIndex = () => {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/" component={Books} /> */}
                <Route exact path="/chapters" component={chapters} />
            </Routes>
        </Router>
    );
};

export default routesIndex; 