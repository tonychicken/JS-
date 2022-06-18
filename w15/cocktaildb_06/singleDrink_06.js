import fetchDrinks from "./src/fetchDrinks_06.js";
import displaySingleDrink_06 from './src/displaySingleDrink_06.js';

const singleDrink =async ()=>{
    const id=localStorage.getItem('drink');
    console.log('locla id',id);
    if(!id){
        window.location.replace('index.html');
    }else{
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        console.log('drink',drink);
    };

};

window.addEventListener('DOMContentLoaded',()=>{
    singleDrink();
});