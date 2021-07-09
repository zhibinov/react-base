import logo from './logo.svg';
import './App.css';
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Это вам не то, тут вам не там.
        </p>
        <Message text={'Здесь был props'}/>
      </header>
    </div>
  );
}

export default App;
