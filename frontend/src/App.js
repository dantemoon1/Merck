import './App.css';
import Logo from './logo';
import SearchBar from './searchBar';
import Upload from './upload';
import "bootstrap/dist/css/bootstrap.min.css";
import Results from './results';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [res1, setRes1] = useState(null);
  const [res2, setRes2] = useState(null);
  const [res3, setRes3] = useState(null);

  const resultsRef = useRef(null);

  const renderResults = () => { //we will pass this function to the search bar component
    setShowResults(true);
  }

  return (
    <div className="App">
      <div className='topBar'>
        <div id='logo'>
          <Logo/>
        </div>
        <div id='search'>
          <SearchBar renderResults={renderResults}/>
        </div>
        <div id='upload'>
          <Upload/>
        </div>
        <div id='results'>
          {showResults && <Results/>}
        </div>
      </div>
    </div>
  );
}

export default App;
