import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/home';
import About from './views/about';
import Contact from './views/contact';
import Nav from './components/navbar';
import AboutUs from './components/about';
import Nom from './components/contact';
import House from './components/home';
function app() {
  return (
    <>
      <Router>

        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>

          <Route path='/home' element={<House></House>}></Route>
          <Route path='/abouttt' element={<AboutUs></AboutUs>}></Route>
          <Route path='/contacttt' element={<Nom></Nom>}></Route>

        </Routes>
       
      </Router>

    </>
  )


}

export default app;
