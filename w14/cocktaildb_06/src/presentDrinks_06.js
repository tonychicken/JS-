import fetchDrinks from './fetchDrinks_06.js';
import displayDrinks from './displayDrinks_06.js';

const presentDrinks =async (url)=>{
    const data = await fetchDrinks(url);
    console.log('fetch data',data);
    const section = await displayDrinks(data);
}

export default presentDrinks;

