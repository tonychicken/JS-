import presentAnimals from "./src/presentAnimals_06.js";

import './src/searchForm_06.js';

import { LOCAL_URL,hasNetwork,serchItems } from "./api/search/config_06.js";


const URL ='https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=25';

window.addEventListener('DOMContentLoaded',()=>{
    if(hasNetwork){
        presentAnimals(URL);
        console.log('Online',URL);
    }else{
        presentAnimals(LOCAL_URL);
        console.log('config_06.js',{LOCAL_URL,hasNetwork,serchItems})
    }
});