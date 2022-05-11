const test1=document.querySelector('.one');
const test2=document.querySelector('.two');
const test3=document.querySelector('.tree');
const test4=document.querySelector('h1')

const btn= document.querySelector('.btn');

btn.addEventListener('click',async() => {
  const result= await displayColor();
  console.log('result',result);
});

const displayColor = async ()=>{
  try{
    await addColor(test1 , 100 , 'red');
    await addColor(test2 , 100 , 'green');
    await addColor(test3 , 100 , 'blue');
  }catch(err){
    console.log(err);
  }
};

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