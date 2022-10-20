import './App.css';
import Logo from './logo';
import SearchBar from './searchBar';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className='topBar'>
        <div id='logo'>
          <Logo/>
        </div>
        <div id='search'>
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
