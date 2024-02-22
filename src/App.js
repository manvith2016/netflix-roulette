import './App.css';
import Counter from './components/counterComponent/counter';
import SearchForm from './components/searchComponent/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='main-counter'>
          <Counter initialValue={0} />
        </div>
        <div>
          <SearchForm initalString={""} />
        </div>
      </header>
    </div>
  );
}

export default App;
