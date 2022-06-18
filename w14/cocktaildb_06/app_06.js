import presentDrinks from "./src/presentDrinks_06.js";

const URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Ydddsfsdas';

window.addEventListener('DOMContentLoaded',()=>{
    presentDrinks(URL);
});