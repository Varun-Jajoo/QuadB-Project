import React, { useState } from 'react';

import {BrowserRouter as Router , Link, useNavigate} from 'react-router-dom';
import { motion } from "framer-motion"

export default function Nav(props) {
  const {input,search} =props
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
// const handlechange =(event)=>{
// input(event.target.value)
// }
const nav = useNavigate();

const search1 = () => {
  nav('/search');
}
  return (
  
    <nav className="navbar navbar-expand-lg navbar">
      <motion.div className="container-fluid">
      <Link className="navbar-brand text-center" to="" style={{fontFamily:"Ink Free", color: 'yellow', fontSize: '6vh' ,marginLeft : "7vw", fontWeight: 'bolder',textAlign: "center" ,marginRight:"25vw"}}>
           QuadB
           
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          
          <span className="navbar-toggler-icon"></span>
        </button>
        <motion.div  className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
               <motion.button animate={{ color: 'white', fontSize: '20px' ,marginLeft : "17vw", fontWeight: 'bold',backgroundColor:"#163a24",border:"none"}} whileHover={{scale: 1.2,color:"yellow"}} >Home</motion.button> 
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link "
                to="/varun"
                
                role="button"
                
                aria-expanded="false"
                style={{ color: 'white' ,fontSize: '20px' ,marginLeft : "30px", fontWeight: 'bold'}}
              >
                <motion.button animate={{ color: 'white', fontSize: '20px' ,marginLeft : "30px", fontWeight: 'bold',backgroundColor:"#163a24",border:"none"}} whileHover={{scale: 1.2,color :"yellow"}} >About me</motion.button> 
             
            </Link>
            </li>
          </ul>
         
        </motion.div>
      </motion.div>
      <motion.button 
      animate={{marginLeft :"0" ,backgroundColor :"#163a24",border :"none", paddingTop :"0",marginRight :"4vw",height : "5vh",width :"5vh"}}
      whileHover={{scale:1.2}}>
        
     
        
      <motion.svg whileHover={{color:"yellow"}} animate={{color : "white"}} onClick={search1} xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-search" viewBox="0 0 30 30">
       <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </motion.svg>

      </motion.button>
    </nav>
    
    
    
    
   
  
  );
}
