import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// import Hero from './components/Hero';
import {Home} from './components/Home';
import GettingStarted from './components/GettingStarted';
import Resources from './components/Resources';

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';




class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
  const facebook = <FontAwesomeIcon icon={faFacebook} />
  const twitter = <FontAwesomeIcon icon={faTwitter} />
  const date = new Date().year;

  return (
  <Router>
    <div className="container-fluid">
      <div className="row">  
      <div className="col">     
          <Navbar bg="light" expand="md" className="nav-decoration">

   <IndexLinkContainer to="/">
    <Navbar.Brand className="pl-5 title  nav-font">Backyard Chickens</Navbar.Brand>
    </IndexLinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  >
      <Nav className="mr-auto">
         
        <LinkContainer to="/gettingstarted">
        <Nav.Link className="nav-font">Getting Started</Nav.Link>
        </LinkContainer>

         <LinkContainer to="/resources">
        <Nav.Link className="nav-font">Resources</Nav.Link>
        </LinkContainer>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div> 
      </div>
      <div className="row hero">
          
      </div>
     
      <Switch>
       <Route exact path="/" render={() => <Home />} />    
      
     
       <Route exact path="/gettingstarted" render={GettingStarted} />    
      
     
       <Route exact path="/resources" render={Resources} />    
       </Switch>
       </div>
      
     <div className="row footer-row d-flex justify-content-center align-items-center">
      
    
       <div className="footer-col align-items-center">

         <ul className="mt-2 pt-2 footer-ul d-flex align-items-center mx-auto text-center">

  <li className="footer-li mx-3"><Link to="/" className="footer-link  text-dark nav-font">Home</Link></li> 
  
  
  <li className="footer-li mx-3"><Link to="/gettingstarted" className="footer-link  text-dark nav-font">Getting Started</Link>  </li>    

  <li className="footer-li mx-3"><Link to="/resources"  className="footer-link  text-dark nav-font">Resources</Link>  </li>  
</ul>
      
</div>
<div className="row">
  <div className="col footer-li mx-3 nav-font mb-3">&copy; <a href="#" className="nav-font text-dark">Pink Comet Web Design</a> 2021 {date}
  </div>
  </div> 
        </div>    
     
 
    </Router>
  );
  }
}

export default App;
