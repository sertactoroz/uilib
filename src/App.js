import logo from './logo.svg';
import './App.css';
import './components/TabButton/TabButton';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { TabButton } from './components/TabButton/TabButton';

function App() {
  return (

    <div className="App">
      <Navbar />
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React practice
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <TabButton />
      </header>
    </div>
  );
}

export default App;
