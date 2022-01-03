import React from 'react';
import {Link,BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import PageNotFound from './PageNotFound';
import Userinfo from './Userinfo';
export default function Navbar() {
    return (
        <div>
           <Router>
               
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/userinfo/:id' element={<Userinfo/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='*' element={<PageNotFound/>}></Route>
</Routes>
               </Router> 
        </div>
    )
}
