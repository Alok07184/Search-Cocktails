import React from 'react'
import { useGlobalContext } from '../Context'
import './searchstyles.css';


export default function SearchForm() {
    const {setsearchTerm} = useGlobalContext();
    const searchValue = React.useRef('');

    React.useEffect(()=>{
        searchValue.current.focus();
    },[])
    
    const searchcocktail=()=>{
        setsearchTerm(searchValue.current.value);
    }
    const handlesubmit=((e)=>{
        e.preventDefault();
    })
  return (
    <>
    <section className='search_section'>
        <form action="" onSubmit={handlesubmit} >
            <div className='search_div'>Search Your Cocktails here</div>
            <input type="text" placeholder='' className='search_input' id='names' ref={searchValue} onChange={searchcocktail} />
        </form>
    </section>
    </>
  )
}
