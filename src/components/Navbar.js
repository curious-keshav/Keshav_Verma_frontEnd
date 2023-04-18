import React from 'react'
// import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{fontWeight:'800'}}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              


              <Link style={{ textDecoration: 'none'}} to="/">
              <li className="nav-item" >
                <div className="nav-link active"  aria-current="page" >Output</div>
              </li>
                </Link>
              <Link to="/answer" style={{ textDecoration: 'none'}}>
              <li className="nav-item" style={{ textDecoration: 'none'}}>
                <div className="nav-link active" style={{ textDecoration: 'none'}} aria-current="page">Answers</div>
              </li>
                </Link>
              

            </ul>
            
<div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick = {props.toggleMode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{fontWeight:'800'}}>Dark Mode</label>
</div>     


          </div>
        </div>
      </nav>
      <h1 className={`my-3 text-center text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
    </>
  )
}

export default Navbar