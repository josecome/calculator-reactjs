import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';

function App() {
  const [changeBck, setchangeBck] = useState(false);
  const styles = {
    bck: {
      backgroundColor: "#85C1E9",
    },
    bck2: {
      backgroundColor: "white",
    }
};  
  return (
    <Router>
      <div className="App">
        <div style={changeBck ? styles.bck : styles.bck2}>
        <Header 
          title="Calculator"
          backGroundClr = {changeBck}
          changeBckg={() => setchangeBck(!changeBck)}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Footer />          
        </div>
      </div>      
    </Router> 
  );
}

export default App;
