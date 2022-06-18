import get from "./getElement.js";
import presentDrinks from "./presentDrinks_06.js";

const form =get('.search-form');

const input = get('[name="drink"]');

const baseURL ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup',(e)=>{
    e.preventDefault();//取消預設方法
    console.log('input',input.value);//監聽查看
    const value=input.value;
    presentDrinks(`${baseURL}${value}`);//監聽input.value，搜尋API內物件
});