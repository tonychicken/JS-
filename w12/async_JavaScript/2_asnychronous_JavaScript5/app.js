// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
console.log(123);
boilingWater();
console.log('chop carrots');

function boilingWater (){
  console.log('boiling....');

  setTimeout(()=>{
    console.log('boiling done');
    console.log('add carrots');
    setTimeout(()=>{
      console.log('chop onion')
      setTimeout(()=>{
        console.log('carrots boil done');
        console.log('add onion')
        setTimeout(()=>{
          console.log('onion boil done');
          setTimeout(()=>{
            console.log('Everything is done');
          },2000)
        },1000)
      },3000)
    },1000)
  },1000)
}