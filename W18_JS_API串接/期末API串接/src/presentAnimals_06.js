import fetchAnimals from './fetchAnimals_06.js';
import displayAnimals from './displayAnimals_06.js';
import setAnimals from './setAnimal_06.js';


const presentAnimals =async (url)=>{
    const animals = await fetchAnimals(url);
    console.log('fetch data',animals);
    const section = await displayAnimals(animals);//搜尋主頁面
    if(section){
        setAnimals(section);
    }

}

export default presentAnimals;

