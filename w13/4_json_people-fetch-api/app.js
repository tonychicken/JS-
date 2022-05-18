const btn=document.querySelector('.btn');

const url='./api/people.json';

btn.addEventListener('click',()=>{
    fetchData(url);
});

function fetchData(url){
    // const response = fetch(url).then().catch();
    // console.log('response',response);
    
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log('data',data)
        displayitems(data);
        })
        .catch((err)=>console.log('error',err));
}

const displayitems=(items)=>{
    const displayData=items
        .map((item)=>{
            return `<p>${item.name}</p>`
        })
        .join('');
        console.log('displayData',displayData);
        const element=document.createElement('div');
        element.innerHTML=displayData;
        document.body.appendChild(element);
}


function getData(url){
    const xhr =new XMLHttpRequest();
    console.log('xhr0',xhr); 

    xhr.open('GET',url);
    xhr.onreadystatechange=function(){
    console.log('xhr',xhr);
    if(xhr.readyState===4&& xhr.status===200){
        // console.log('done');
        const data=JSON.parse(xhr.responseText);
        console.log('data',data);
        const displayData=data
        .map((item)=>{
            return `<p>${item.name}</p>`
        })
        .join('');
        console.log('displayData',displayData);
        const element=document.createElement('div');
        element.innerHTML=displayData;
        document.body.appendChild(element);
    }else{
        console.log({
            status:xhr.status,
            text: xhr.statusText,
        });
      }    
    };
    xhr.send();
}


