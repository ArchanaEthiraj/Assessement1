import React from 'react'
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineBehance } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import './Navbar.css'
function Navbar(){
    
    return(
        <div>
           <nav className='navbar navbar-expand-md navbar-light shadow p-3 mb-5 bg-body'>
               <div className='container'>
                   <a href='#title' className='navbar-brand'>
                           <span className='d-flex'>
                              <div className='code'><h4>Codding</h4></div>
                               <div className='add ms-2'><h4>Addict</h4></div></span>
                   </a></div>
                   <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#main-nav"
                   aria-controls='main-nav' aria-expanded="false" aria-label='Toggle navigation'>
                       <span className='navbar-toggler-icon'></span>
                   </button>
                   <div className='collapse navbar-collapse' id="main-nav">
                       <ul className='navbar-nav text-center'>
                           <li className='nav-item '><a className='nav-link letter' href='#home'>Home</a></li>
                           <li className='nav-item'><a className='nav-link letter' href='#about'>About</a></li>
                           <li className='nav-item'><a className='nav-link letter' href='#projects'>Projects</a></li>
                           <li className='nav-item'><a className='nav-link letter' href='#contact'>Contact</a></li>
                           <li className='nav-item'><a className='nav-link letter' href='#profile'>Profile</a></li>
                       </ul>
                   </div>
               
               <div className='d-flex'>
               <div className='fb ms-2 d-none d-lg-block'><BsFacebook size='25'/></div>
               <div className='tw ms-2 d-none d-lg-block'><AiOutlineTwitter size='25'/></div>
               <div className='li ms-2 d-none d-lg-block'><AiFillLinkedin size='25'/></div>
               <div className='be ms-2 d-none d-lg-block'><AiOutlineBehance size='25'/></div></div>
           </nav>
        </div>
    )
}

export default Navbar