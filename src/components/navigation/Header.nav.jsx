import React from 'react';

const HeaderNav = () => {
    return (
        <div>
            <nav>
          
          <span key="all" onClick={() => setNavAllBooks(true)}>
            All
          </span>

          <span key="level1" onClick={() => setNavLevel1(true)}>
            Level 1
          </span>

          
      </nav>
        </div>
    );
};

export default Header.nav;