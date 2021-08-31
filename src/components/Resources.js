import React from 'react';
import RESOURCES from '../resources';
import eggbowl from '../images/eggbowl.jpg';
import running from '../images/running.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg } from '@fortawesome/free-solid-svg-icons';



const Resources = () => {

 const windowWidth = window.innerWidth;

 const egg = <FontAwesomeIcon className="sizing" icon={faEgg} />

 const list =  RESOURCES.map((item, idx) => {
    return <li className="list my-4 mx-2" key={idx}>{' '}{egg}{' '}<a className="text-dark" href={item.url} target="_blank" rel="noreferrer">{item.name}</a></li>
  })


 console.log(list)


 return(
  <>
  <div className="row">
  <div className="col  mx-auto text-center">
    <img className="eggs m-4 shadow" src={eggbowl} alt="bowl of fresh eggs" />
  
 </div>
 </div>
  <div className="row">
  <div className="col text-center mx-auto mt-3 mb-2 pt-3 pb-2 location-header">
   <h2>Resources to Get Started</h2>
 </div>
 </div>

  <div className="row">
  <div className="col">
 <ul className="text-left">
 {list}

 </ul>
 </div>
 </div>

   <div className="row">
  <div className="col  mx-auto text-center my-5">
   
    <img className="running my-2 shadow" src={running} alt="chicken on a mission" />
   </div>
   </div>

 </>
 )
 
}

export default Resources;