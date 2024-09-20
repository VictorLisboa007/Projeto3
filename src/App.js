import logo from './logo.svg';
import './App.css';
import Forms from './components/Forms.jsx';

import Home from './pages/Home.jsx';
import Historia from './pages/Historia.jsx';
import Cadastro from './pages/Cadastro.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      {/* <Forms name="Marcos" email="marcos@gmail.com"/> */}
      {/* <Forms/> */}
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/historia' element={<Historia />} />
            <Route path='/cadastro' element={<Cadastro />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
