 // dom manupulation we  do  
const container = document .querySelector(".container");//  refernece to the main charcheter

const seats = document. querySelectorAll(".row .seats:not(.sold");// avaliable seat only

const count = document. getElementById("count");//referecnce of count and total elemnet
const total  = document. getElementById("total");

const movie = document. getElementById("movie");//referecnce of count and total elemnet//
//  ticket price we are given 
 let ticketPrice= +movie.value;
 //console.log(ticketPrice)
 //step  event listern

 movie.addEventListener("change", (e)=>{


    // update tciket 
    ticketPrice = e.target.value;// particular value of movie
   
 })

 // event listerer for seat 

 container.addEventListener(" click ", e=>{
    if(e.target.classList.container("seat")&& e.target. classList.container("sold")){
        //togeel seat
        e.target.classList. toggle("selected");
    }
 })