import React from 'react'
// import {Link} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useSelector} from"react-redux";

const Navbar=() => {
  const state = useSelector((state)=>state.handleCart)
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"><strong>Hi-Fi COLLECTION</strong></Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
       
      
        <li className="nav-item">
          <Link className="nav-link active" to="/products">Product`s</Link>
        </li>


        <li className="nav-item ">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
       
       
      
        <li className="nav-item">
          <Link className="nav-link active" to="/offers">Offers</Link>
        </li>
       
      
        
       
      
      </ul>
      <div className="buttons">

      <Link to="/login" className='btn btn-dark outline mx-1'><i className="fa fa-sign-in"></i> Login </Link>
      <Link to="/user" className='btn btn-dark outline mx-1'><i className="fa fa-user"></i> User </Link>
      <Link className='btn btn-dark outline mx-1'><i className="fa fa-shopping-cart"></i> Cart({state.length}) </Link>
    </div>
      </div>
  </div>
</nav>
  )
}

export default Navbar