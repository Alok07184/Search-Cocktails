import React from 'react'
import Cocktails from './Cocktails';
import Loading from './Loading';
import { useGlobalContext } from '../Context';
import './cocktailstyles.css';

export default function CocktailList() {
    const {cocktail,loading} = useGlobalContext();

    

    if(loading){
        return <Loading/>
    }
    if(cocktail.length <1){
        return (
            <span className='cocktail_head'>No Cocktail Found Accoring to Your Search.</span>
        )
    }
  return (
    <>
        <section className='cocktail_section'>
            <p className='cocktail_head'>Cocktails</p>
            <div className='cocktail_grids'>
                {cocktail.map((item)=>{
                    return <Cocktails 
                    key={item.id}
                    {...item}/>
                })}
            </div>
        </section>
    </>
  )
}
