import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
import ISO6391 from 'iso-639-1';
import './Nav.css'


export default function Nav() {
   return (
      <>
 
        <nav  style={{backgroundColor:"white",minHeight:"4rem", boxShadow: "0px 5px 29px 10px gray"}} className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><strong>Love singh</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize">
          
           <li className="nav-item link">
           <Link className="nav-link active" aria-current="page" to="/business">business</Link>
           </li>
           <li className="nav-item link">
           <Link className="nav-link active" aria-current="page" to="/entertainment">entertainment</Link>
           </li> 
           <li className="nav-item ">
           <Link className="nav-link link active" aria-current="page" to="/general">general </Link>
           </li>
           <li className="nav-item link">
           <Link className="nav-link active" aria-current="page" to="/health">health</Link>
           </li> 
           <li className="nav-item link">
           <Link className="nav-link active" aria-current="page" to="/science">science</Link>
           </li> 
           <li className="nav-item link">
           <Link className="nav-link active" aria-current="page" to="/sports">sports</Link>
           </li> 
           <li className="nav-item link">
           <Link className="nav-link active" aria-current="page" to="/technology">technology</Link>
           </li>
      
      
         </ul>

         <form className="d-flex">
       
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success" type="submit">Search</button>
     </form>
       </div>
     </div>
   </nav>
      </>
    );
  }


 