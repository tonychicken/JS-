import get from "./getElement.js";
import presentAnimals from "./presentAnimals_06.js";

const form =get('.search-form');

const change=get('[name="select"]');

const input = get('[name="Animal"]');

const baseURL ='https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=';

form.addEventListener('keyup',(e)=>{
    e.preventDefault();//取消預設方法
    console.log('input',input.value);//監聽查看
    const value2=change.value;
    console.log('dfdf',change.value);//監聽查看
    const value=input.value;
    presentAnimals(`${baseURL}${value}`);//監聽input.value，搜尋API內物件
});