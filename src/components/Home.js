import React from 'react';

import eggs from '../images/eggs.jpg'
import chicken1 from '../images/chicken1.jpg'


class Home extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   name: '',
   email: ''
  }
 }

 handleChangeName = (event) => {
    this.setState({
    
     name: event.target.value
    })
 }

 handleChangeEmail = (event) => {
    this.setState({
     email: event.target.value
    
    })
 }

 handleSubmit = (event) => {
  alert('Thank you ' + this.state.name + '. Your email is: ' + this.state.email);
  event.preventDefault();
 }

 render() {
 return(
  <div>

  <div className="row">
   <div className="col text-center p-3">
  <img className="eggs mt-4 shadow" src={eggs} alt="chicken eggs in coop" />
 </div>
 </div>
  <div className="row">
  <div className="col text-center mx-auto m-3 p-4 intro">
   Raising chickens can be a fun and rewarding activity. With the right setup, it can also be surprisingly low maintenance, on par with having a dog or cat.
 </div>
 </div>

 <div className="row">
 <div className="col text-center p-3">
  <img className="eggs my-2" src={chicken1} alt="barred rock chicken" />
  
 </div>
 </div>

 <div className="row">
  <div className="col text-center m-3 p-4 mx-auto intro">
  Chickens can learn all kinds of things, including who their caretakers are, and they can be very social.
 </div>
 </div>

  <div className="row">
 
     <form onSubmit={this.handleSubmit} className='form-field shadow-lg'>
        <div className="col text-center m-1 mx-auto pt-2"><h5>Sign up for The Chicken Chat newsletter</h5>
     <label className="form-label mt-3">
          Name:
          <input type="text" className="form-control mt-2" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        </div>
        <div className="col text-center m-1  mx-auto">
      <label className="form-label mt-3">
          Email:
          <input type="text" className="form-control mt-2" value={this.state.email} onChange={this.handleChangeEmail} />
        </label>
        </div>
           <div className="col text-center mb-4 mx-auto">
        <input type="submit" className="btn btn-dark" value="Submit" />
        </div>

   </form>
   
 
 </div>


 </div>
 )
 }
}

export {Home}