const containerE1 = document.querySelector(".container")
const leftE1=document.querySelector(".left")
const rightE1=document.querySelector(".right");

leftE1.addEventListener("mouseenter",()=>{
containerE1.classList.add("active-left");
leftE1.style.width = "100%"; // Change width to 70%
rightE1.style.width = "0%"; // Change width to 30%

});

leftE1.addEventListener("mouseleave",()=>{
    containerE1.classList.remove("active-left")
   leftE1.style.width = "50"; // Reset width to original
    rightE1.style.width = "50%"; // Reset width to original

});
rightE1.addEventListener("mouseenter",()=>{
    containerE1.classList.add("active-right");
    rightE1.style.width ="100%";



})
rightE1.addEventListener("mouseleave",()=>{
    containerE1.classList.remove("active-right");
    rightE1.style.width="50%"
    leftE1.style.width="50%" // Reset width to original


})