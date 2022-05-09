import React from 'react'
import { Link } from 'react-router-dom'
import './stylingnav.css';



export default function Navbar() {
  return (
    <>
    <nav className="navbar" >
        <div className="nav-center">
            <Link to="/">
                <img src="" alt="LoGo" className='logo' />
            </Link>
        </div>
        <div className='nav-item'>
        <p>
            <Link to="/">Home</Link>
            </p>
           <p><Link to="/about">About</Link>
           </p> 
        </div>
    </nav>
    </>
  )
}
