import get from './getElement.js';
import { hideLoading } from './toggleLoading_06.js';


const displayAnimals = async ( animals ) => {
    console.log('animals', animals);
    const title = get('.title');
    const section = get('.section-center');
    // console.log(title);

    if (!animals) {
        hideLoading();
        title.textContent = 'Sorry,No animals matched your search';
        section.innerHTML = null;
        return;
    }
    const newanimals = animals.map((animals) => {
        const { animal_id: id, album_file:image,animal_Variety: Variety,animal_sex : sex,animal_place:place } = animals;
        return `     
            <a href="Animals_06.html">
            <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="cocktail">
            <h3>${Variety}</h3>
            <h3>${sex}</h3>
            <h3>${place}</h3>
            </article>
            </a>
            `
    }).join('');//JOIN不要陣列，要字串
    hideLoading();
    title.textContent = '';
    section.innerHTML =newanimals;//從API動態產生圖片

    return section;
}

export default displayAnimals;