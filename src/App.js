import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Header title="Calculator"/>
      <Calculator />
    </div>
  );
}

export default App;
