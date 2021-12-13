import React from 'react';
import { Result } from './Result';
import { Search } from './Search';

function App() {
  return (
    <div className="page">
      <div className="container">
        <Search />
        <Result />
      </div>
    </div>
  );
}

export default App;
