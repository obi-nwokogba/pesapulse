import logo from './logo.svg';
import './App.css';
import UniversalHeader from "./components/UniversalHeader";

function App() {
  return (
    <div className="App">
      <UniversalHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

      </header>
      <UniversalFooter />
    </div>
  );
}

export default App;
