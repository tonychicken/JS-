const test1=document.querySelector('.one');
const test2=document.querySelector('.two');
const test3=document.querySelector('.three');
const test4=document.querySelector('h1')

const btn= document.querySelector('.btn');

btn.addEventListener('click',()=>{
  setTimeout(()=>{
    test1.style.color="red";
    setTimeout(()=>{
      test2.style.color="blue";
      console.log(test2.textContent);
      setTimeout(()=>{
        test3.style.color="green";
        console.log(test3.textContent);
        setTimeout(()=>{
          test4.style.color="red";
          test3.style.color="blue";
          test2.style.color="green";
          test1.style.color="yellow";
          setTimeout(()=>{
            test1.style.color="red";
            test2.style.color="blue";
            test3.style.color="green";
            test4.style.color="yellow";
            setTimeout(()=>{
              test2.style.color="red";
              test4.style.color="blue";
              test1.style.color="green";
              test3.style.color="yellow";
            },500)
          },500)
        },300)
      },100)
    },100)
  },100)
})

