'use strict';
let RandomNum =Math.ceil(Math.random()*20);                //亂數生成數字1~20
let nowscore=0
console.log("答案是"+RandomNum)                            //把答案印在主控台


const guessNum=document.querySelector(".guess");
const highscore=document.querySelector(".highscore");
const btns=document.querySelectorAll(".btn")
const score=document.querySelector(".score");

btns.forEach((btn)=>{                                    //監聽Check跟Again兩個按鈕
    btn.addEventListener('click',(e)=>{
        const styles=e.currentTarget.classList;
        if(styles.contains('check')){
            console.log('value',guessNum.value);
            nowscore++;

            if(guessNum.value==RandomNum){
                alert("你猜對了");

                document.querySelector(".number").innerHTML=guessNum.value;//改變中間的數字
                document.querySelector(".score").innerHTML=nowscore;//改變現在猜的次數

                document.body.style.backgroundColor = 'green';
                if(nowscore<highscore.textContent){
                    highscore.textContent=nowscore;
                    console.log(nowscore+"次猜對，創新紀錄!");
                    alert("創新紀錄!")
                }
            }
            else{
                document.querySelector(".score").innerHTML=nowscore;//改變現在猜的次數
                alert("你猜錯了");
            }
            
        }


        if(styles.contains('again')){
            //以下皆為數值重新設定(參照CSSS以及原本HTML重設)
            document.body.style.backgroundColor = '#222';
            RandomNum =Math.ceil(Math.random()*20);
            console.log(RandomNum)
            document.querySelector(".number").innerHTML="?"
            nowscore=0;
            document.querySelector(".score").innerHTML="0"
            alert("猜數字遊戲開始!")
            
        }
    })
})

let bill = [30,50,80,100,150,180,200,250,300];
let tip = [];
let total = [];

/*for (var prop in bill){
    tip[prop]=bill[prop]*0.15;
    total[prop]=bill[prop]+tip[prop];


    console.log("消費"+bill[prop],"小費"+tip[prop],"總金額"+total[prop])
}*/

bill.forEach((item,index,arr)=>{
    tip.push(arr[index]*0.15);
    total.push(arr[index]*0.15+item)
})

console.log("bill:",bill);
console.log("tip:",tip);
console.log("total:",total);
