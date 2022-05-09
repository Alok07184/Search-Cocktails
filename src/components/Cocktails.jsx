import React from 'react'
import { Link } from 'react-router-dom'
import './cocktailstyles.css'

export default function Cocktails(props) {
  return (
    <>
        <article >
            <p className='cocktail_head2'>cocktail id {props.id}</p>
            <div  className='cocktail_parent_image'>
            <img src={props.imgsrc} alt="Img Of cocktail" className='cocktail_image' />
            </div>
            <div className='cocktail_detail'>
                <p className='cocktail_names'>{props.names}</p>
                <span className='cocktail_propss'>{props.glass}</span>
                <p className='cocktail_propss'>{props.info}</p>
                
                <Link to={`/cocktail/${props.id}`} className="cocktail_btn">Details</Link>
            </div>
        </article>
    </>
  )
}
