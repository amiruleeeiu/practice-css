import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Topbar from './components/topbar/Topbar';

function App() {
  
  return (
    <BrowserRouter>
      <Topbar/>
    </BrowserRouter>
  );
}

export default App;
