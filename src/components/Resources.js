import React from 'react';
// import hgplogo from '../images/hgplogo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';




  


const Resources = () => {

 const phone = <FontAwesomeIcon icon={faPhone} />
  const email = <FontAwesomeIcon icon={faEnvelope} />


 return(
  <>
  <div className="row">
  <div className="col  mx-auto text-center">
  placeholder
  
 </div>
 </div>
  <div className="row">
  <div className="col text-center mx-auto mt-3 mb-2 pt-3 pb-2 location-header">
   <h4>placeholder</h4>
 </div>
 </div>

  <div className="row">
  <div className="col  mx-auto text-center">
 placeholder
 </div>
 </div>

   <div className="row">
  <div className="col  mx-auto text-center my-5">
   placeholder
   </div></div>

 </>
 )
 
}

export default Resources;