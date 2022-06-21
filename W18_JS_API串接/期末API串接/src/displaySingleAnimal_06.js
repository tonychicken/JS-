import get from "./getElement.js";
import { hideLoading } from "./toggleLoading_06.js";

const displaySingleAnimal_06 = async (animals)=>{
    console.log('display Animal',animals[0]);
    hideLoading();
    const Animal =animals[0];
    const{album_file:image,animal_Variety:name,animal_sex:sex,
        animal_place:place,shelter_address:saddress,animal_bodytype:bodytype,
        animal_colour:color,animal_area_pkid:date,animal_age:age,cDate:founddate,
        animal_subid:subid,animal_kind:kind,shelter_tel:phone}=Animal;
    // const list=[
    //     Animal.strIngredient1,
    //     Animal.strIngredient2,
    //     Animal.strIngredient3,
    //     Animal.strIngredient4,
    //     Animal.strIngredient5,
    // ];
    const img =get('.Animal-img');
    img.src=image;
    const AnimalName=get('.Animal-name');
    AnimalName.textContent =name;
    const description1 = get('.Animal-1');
    description1.textContent='入所天數:'+date;
    const description2 = get('.Animal-2');
    description2.textContent='年齡:'+age;
    const description3 = get('.Animal-3');
    description3.textContent='入所日期:'+founddate;
    const description4 = get('.Animal-4');
    description4.textContent='是否開放認領養: 是';
    const description5 = get('.Animal-5');
    description5.textContent='收容編號:'+subid;
    const description6 = get('.Animal-6');
    description6.textContent='動物別:'+kind;
    const description7 = get('.Animal-7');
    description7.textContent='毛色:'+color;
    const description8 = get('.Animal-8');
    description8.textContent='體型:'+bodytype;
    const description9 = get('.Animal-9');
    description9.textContent='動物性別:'+sex;
    const description10 = get('.Animal-10');
    description10.textContent='公告收容所:'+place;
    const description11 = get('.Animal-11');
    description11.textContent='收容所電話:'+phone;
    const description12 = get('.Animal-desc');
    description12.textContent='收容所地址:'+saddress;    
    const description13 = get('.Animal-12');
    description13.textContent='描述：本站動物皆採現場互動面談後評估能否認養 不接受系統上的預約';

    // const ingredients=get('.animal-ingredients');
    // ingredients.innerHTML=list
    // .map((item)=>{
    //     if(!item) return;
    //         return `<li> <i class="far fa-check-square"></i>${item}</li>`;
    // })
    // .join('');
}
export default displaySingleAnimal_06;