import React from 'react';

import coop from '../images/coop.jpg'
import eggdoor from '../images/eggdoor.jpg'
import roost from '../images/roost.jpg'
import pair from '../images/pair.jpg'


const GettingStarted = () => {

 return(
  <>

  <div className="row">

   <div className="col text-center m-3 p-3 mx-auto intro">
  <span className="F">F</span>or chicken keeping, the most important investment you can make is in a coop that protects chickens from the weather and predators, allows sunlight in a run, and provides an area for them to roost at night and a henbox for laying eggs. The coop should be accessible enough to easily clean regularly. Air circulation is critical in both the coop and the run area. If you are raising chicks, you will want to begin planning for your coop as soon as possible so that the chickens can be moved out to the coop at around 8 weeks of age (depending on local climate). <br /><br /> If you are in area where you can have roosters, you will want no more than one rooster per eight hens. 
  
  </div>
 <div className="row">
 <div className="col text-center">
  <img className="m-3 p-0 coop img-fluid" src={coop} alt="chicken coop" />
 </div>
 </div>
 </div>
  
  <div className="row">
  <div className="col text-center mx-auto m-3 p-3 caption">
   This is The Garden Coop plan from <a className=" text-dark " target="_blank" rel="noreferrer" href="http://www.thegardencoop.com/">The Garden Coop Website</a>.
 </div>
 </div>

<div className="row">
 <div className="col text-center py-4">
  <img className="img-fluid" src={pair} alt="pair of chickens" />
 
 </div>
 </div>
 

 <div className="row">
  <div className="col text-center m-3 p-3  intro mx-auto">
  Basic supplies for laying hens include pine shavings, chicken feed with Omega-3, calcium or oyster shell, grit, nutritious chicken treats such as rose petals and mealy worms, and a constant supply of fresh water. <br /><br /> Baby chicks have additional needs including a special feed and temperature-controlled environment, and your local feed store will be able to help you get started. 
 </div>
 </div>


 </>
 )
 
}

export default GettingStarted;