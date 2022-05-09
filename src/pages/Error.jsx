import React from 'react'
import { Link } from 'react-router-dom'
import './pagestyles.css';

export default function Error() {
  return (
    <>
      <div className='error'>
        <p className='error_head'>
        <span> Oops! </span>Error Found.</p>
        <Link to="/" className='error_body'>Go Back</Link>
      </div>
    </>
  )
}
