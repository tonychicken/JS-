import get from './getElement.js';

const displayDrinks = async ({drinks}) =>{
    console.log('drink',drinks);
    const title = get('.title');
    const section = get('.section-center');
    // console.log(title);

    if(!drinks){
        title.textContent = 'Sorry,No drinks matched your search';
        section.innerHTML = null;
    return;
    }
    return section;
}

export default displayDrinks;