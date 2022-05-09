import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading';
import './single.css'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export default function Singlecocktail() {
  const {id} = useParams();
  const [loading,setloading] = React.useState(false);
  const [cocktail,setcocktail] = React.useState("");

  React.useEffect(()=>{
    setloading(true);
    async function getCock(){
      try{
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if(data.drinks){
          const {strDrink:name,strDrinkThumb:imgsrc,strAlcoholic:info,strCategory:category,strGlass:glass,strInstructions:instruc,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0];
          const ingredients=[
            strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5
          ]
          const newcocks={
            name,imgsrc,info,category,glass,instruc,ingredients
          }
          setcocktail(newcocks);
        }
        else{
          setcocktail(null)
        }
        setloading(false);
      }
      catch(error)
      {
        console.log(error);
      }
    }
    getCock();
  },[id])
  if(loading)
  {
    <Loading/>
  }
  const {name,imgsrc,category,info,glass,instruc,ingredients}=cocktail;
  return (
    <>
         <section className='cocktail_info'>
         <Link to="/"  className='cocktail_homeback'>Back Home</Link>
           <h2>{name}</h2>
           <div className='cocktail_detail'>
             <img src={imgsrc} alt="Imagee"  className='single_image'/>
             <div className='single_inline'>
               <p >
                 <span className='single_q'>name:</span><span className='single_ans'>{name}</span>
               </p>
               <p >
                 <span className='single_q'>Category:</span><span className='single_ans'>{category}</span>
               </p>
               <p >
                 <span className='single_q'>information:</span><span className='single_ans'>{info}</span>
               </p>
               <p >
                 <span className='single_q'>glass:</span><span className='single_ans'>{glass}</span>
               </p>
               <p >
                 <span className='single_q'>instruction:</span><span className='single_ans'>{instruc}</span>
               </p>
               
               

             </div>
           </div>

         </section>
    </>
  )
}

