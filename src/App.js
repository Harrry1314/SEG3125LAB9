import React from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Search from './components/Search';
import Pc from './components/Pc';
import Laptop from './components/Laptop';
import Headphone from './components/Headphone';
import Router from './components/Router';
import Cart from './components/Cart';
import AboutF from './components/AboutF';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/Search' component={Search} />
        <Route path='/About' component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Pc' component={Pc} />
        <Route path='/Laptop' component={Laptop} />
        <Route path='/Headphone' component={Headphone} />
        <Route path='/Router' component={Router} />
        <Route path='/Cart' component={Cart} />
        <Route path='/AboutF' component={AboutF} />
      </div>
    </BrowserRouter>
  );
}

export default App;
