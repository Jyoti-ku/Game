let userscore= 0;
 let compscore =0; 

  const choices =document.querySelectorAll(".choice");// it give all choices
  const msg = document.querySelector("#msg");
  const userscorepara= document.querySelector("#user-score");
  const compscorepara= document.querySelector("#comp-score");


const  gencompchoice=()=>{
    const options = ["rock", " paper", "scissors"];// wew cant amke from string  but from array for sure creat 
   const randInx= Math.floor(Math.random()*3);
   return options[randInx];


}
const drawgame= ()=>{
    console.log("game draw");
   msg.innerText="game deaw. play again";
   msg.style .backgroundColor= "black";
        

}
 const showwinner = ( userwin, userchoice, comphoice)=>{
    if(userwin){
        userscore++;
        userscorepara. innerText=userscore;
        console.log("you win!");
        msg.innerText= `You win ! Your ${userchoice} beats ${comphoice}`;
        msg.style .backgroundColor= "green";

    }else{
        compscore++;
    compscorepara. innerText= compscore;
        //console.log("you lose");
    msg.innerText=  `You lose ! Your ${comphoice} beats   ${userchoice}`;
    msg.style .backgroundColor= "red";
        
    }
 }


const playGame = ( userchoices)=>{
   // console.log("userchoice =", userchoices);
    const comphoice=gencompchoice();

if(userchoices === comphoice){
drawgame();
}else{
    let userwin = true;
    if(userchoices=="rock"){
       userwin = comphoice === "paper" ? false:true;
    }else if( userchoices === "paper"){
      userwin=comphoice === "scissors" ?false:true;
    }else{
        userwin= comphoice==="rock" ? false: true;
    }
    showwinner(userwin, userchoices, comphoice);
}
 
};

  
 choices. forEach((choice)=>{// we are choices from eveery choice
    //console.log(choice);
choice.addEventListener("click", ()=>{// it will track click event
    const userchoices= choice.getAttribute("id");
//console.log(" choice was  clicked", userchoices );
playGame(userchoices )
})

 })