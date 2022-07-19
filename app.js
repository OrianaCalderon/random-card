
let cardSigns = ["♦","♦", "♥", "♠", "♣"];
let cardNumbers = [
    "A","2","3","4","5","6","7","8","9","10","J","Q","K"]


let randomCardSigns = () =>{
    return Math.floor(Math.random() * cardSigns.length + 1)} 
let randomCardNumbers = () =>{
    return Math.floor(Math.random() * cardNumbers.length + 1)} 


window.onload=()=> {


    let body = document.body
    body.style.backgroundColor = "green"
    body.style.height="100vh"
    body.style.display="flex"
    body.style.justifyContent="center"
    body.style.alignItems="center"


    let card = document.querySelector("#app")
    card.style.backgroundColor="white"
    card.style.border="1px solid black"
    card.style.height="400px"
    card.style.width="250px"
    card.style.borderRadius="10px"
    card.style.padding="15px"
    card.style.position="relative"



    let containerImgOne= document.createElement("div")
    containerImgOne.textContent= "inicio"
    containerImgOne.style.position="absolute"
    containerImgOne.style.top="1px"
    containerImgOne.style.left="1px"
    containerImgOne.style.width="45px"
    containerImgOne.style.height="45px"
    containerImgOne.style.border="1px solid black"
    containerImgOne.style.margin="15px"



    let containerImgTwo= document.createElement("div")
    containerImgTwo.textContent= randomCardSigns(cardSigns)
    containerImgTwo.style.position="absolute"
    containerImgTwo.style.border="1px solid black"
    containerImgTwo.style.margin="10px"
    containerImgTwo.style.right="5px"
    containerImgTwo.style.top="350px"
    containerImgTwo.style.height="50px"
    containerImgTwo.style.width="50px"
    
    
    let containerNumber= document.createElement("p")
    containerNumber.textContent= randomCardNumbers(cardNumbers)
    containerNumber.style.height="75px"
    containerNumber.style.width="75px"
    containerNumber.style.border="1px solid black"
    containerNumber.style.position="absolute"
    containerNumber.style.top="115px"
    containerNumber.style.height="75px"
    containerNumber.style.right="100px"
    containerNumber.style.fontSize="70px"

    
    card.appendChild(containerImgOne)
    card.appendChild(containerImgTwo)
    card.appendChild(containerNumber)

}