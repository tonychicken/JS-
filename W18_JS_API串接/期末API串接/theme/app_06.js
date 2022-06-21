import presentDrinks from "./src/presentDrinks_06.js";

import './src/searchForm_06.js';

import { LOCAL_URL,hasNetwork,serchItems } from "./api/search/config_06.js";


const URL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Y';

window.addEventListener('DOMContentLoaded',()=>{
    if(hasNetwork){
        presentDrinks(URL);
        console.log('Online',URL);
    }else{
        presentDrinks(LOCAL_URL);
        console.log('config_06.js',{LOCAL_URL,hasNetwork,serchItems})
    }
});