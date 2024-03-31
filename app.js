let gameSeq = [];
let userSeq = [];
let hightScore = 0;
let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function()
{
    if(start == false)
    start = true
    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.style.color="black";
    h2.innerText=`Level ${level}`;

    let randomIndx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndx];
    gameSeq.push(randomColor);
    let randomBtn = document.querySelector(`.${randomColor}`)
    btnFlash(randomBtn);
}
function checkAns(indx){
    if(userSeq[indx]==gameSeq[indx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        if(hightScore<level){
            hightScore = level;
        }
        h2.innerHTML=`Game Over..! <p style="color:green; margin:0;">Your Score was ${level} & High Score is ${hightScore} </p>Press any key to start.`
        
        h2.style.color="red";
        document.querySelector("body").classList.add("over");
        // document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").classList.remove("over");
            // document.querySelector("body").style.backgroundColor="white";
        },200);

        reset();
    }
}

function btnPress(){
    let btn=this
    btnFlash(btn);
    userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns= document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}
