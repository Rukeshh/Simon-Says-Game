let gameSeq=[];
let userSeq=[];
let h2=document.querySelector("h2");
let color=["blue","green","yellow","red"];

let started=false;
let level=0;
let HighScore=0;

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=color[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(randBtn)
{
   randBtn.classList.add("flash");
   setTimeout(function(){
    randBtn.classList.remove("flash");
   },300);
}

function userFlash(btn)
{
    btn.classList.add("voilet");
   setTimeout(function(){
    btn.classList.remove("voilet");
   },300);
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn)
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn)
{
    btn.addEventListener("click",btnPress)
}

function checkAns(idx)
{
    console.log(`level ${level}`);
    if(gameSeq[idx]===userSeq[idx])
    {
        console.log("same");
        if(gameSeq.length==userSeq.length)
        {
            setTimeout(levelUp(),1000);
        }
    }
    else{
        if(HighScore<level)
       {
          HighScore=level;
       }
        h2.innerHTML=`Game Over!!&nbsp; your score is <b>${level}</b> <br>&nbsp;&nbsp;&nbsp; Your Highest score is ${HighScore}<br> &nbsp; &nbsp; &nbsp;Press any Key to start`;
        
        document.querySelector("body").style.backgroundColor="red"; 
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="darkgray"; 
        },200);  
      reset();
    }
}
function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}