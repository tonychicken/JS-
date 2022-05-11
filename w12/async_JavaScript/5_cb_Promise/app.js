const test1=document.querySelector('.one');
const test2=document.querySelector('.two');
const test3=document.querySelector('.thre');
const test4=document.querySelector('h1')

const btn= document.querySelector('.btn');

btn.addEventListener('click',() => {
  addColor(test1,100,'red')
    .then(() => addColor(test2 , 100 , 'green'))
    .then(() => addColor(test3 , 100 , 'blue'))
    .catch((err)=>console.log(err));
});

const addColor =(element,time,color)=>{
return new Promise ((resolve,reject)=>{
  if(element){
    setTimeout(()=>{
      element.style.color=color;
      resolve();
    },time) 
  }else{
    reject(new Error ( `There is no such element 
    ${element}` ));
  }
});
}