const setDrinks =(section)=>{
    section.addEventListener('click',(e)=>{
        // e.preventDefault();
        // console.log('e.target',e.target.parentElement.dataset.id);  //測試
        const id=e.target.parentElement.dataset.id ;

        localStorage.setItem('drink',id );

    })
}

export default setDrinks;