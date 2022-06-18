import get from './getElement.js';
import { hideLoading } from './toggleLoading_06.js';


const displayDrinks = async ({ drinks }) => {
    console.log('drink', drinks);
    const title = get('.title');
    const section = get('.section-center');
    // console.log(title);

    if (!drinks) {
        hideLoading();
        title.textContent = 'Sorry,No drinks matched your search';
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `     
            <a href="drink_06.html">
            <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="cocktail">
            <h3>${name}</h3>
            </article>
            </a>
            `
    }).join('');//JOIN不要陣列，要字串
    hideLoading();
    title.textContent = '';
    section.innerHTML =newDrinks;//從API動態產生圖片

    return section;
}

export default displayDrinks;