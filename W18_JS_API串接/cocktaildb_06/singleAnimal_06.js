import fetchAnimals from "./src/fetchAnimals_06.js";
import displaySingleAnimal_06 from './src/displaySingleAnimal_06.js';

const singleAnimal =async ()=>{
    const id="animal_id="+localStorage.getItem('animal');
    console.log('locla id',id);
    if(!id){
        window.location.replace('index.html');
    }else{
        const Animal = await fetchAnimals(`https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&${id}`);
        console.log('Animal',Animal);
        displaySingleAnimal_06(Animal);
    };

};

window.addEventListener('DOMContentLoaded',()=>{
    singleAnimal();
});