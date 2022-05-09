import React,{useContext, useEffect, useState} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [loading,setloading] = useState(true);
    const [searchTerm,setsearchTerm] = useState('a');
    const [cocktail,setcocktail] = useState([]);


    const fetchDrinks=async()=>{
        setloading(true);
        try{
            const response = await fetch(`${url}${searchTerm}`);
            const data = await response.json();
            
           const {drinks} = data;
           if(drinks){
               const newCocktails = drinks.map((item)=>{
                   const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass,strInstructions}=item;
                   return {id: idDrink,names:strDrink,imgsrc : strDrinkThumb,info:strAlcoholic,glass : strGlass,instruct : strInstructions};
               })
               setcocktail(newCocktails);
           }
           else{
               setcocktail([]);
           }
           setloading(false);
        }
       
        catch(error){
            console.log(error);
            setloading(false);
        }
    }
    useEffect(()=>{
        fetchDrinks();
    },[searchTerm]);

    return(
        <AppContext.Provider
        value={{
            loading,
            
            cocktail,
            setsearchTerm
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}