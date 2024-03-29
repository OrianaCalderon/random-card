let generateRandomNumber = () => {
    let cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomCardNumbers = Math.floor(Math.random() * cardNumbers.length);
    return cardNumbers[randomCardNumbers];
}

let generateRandomSign = () => {

    let cardSigns = ["♦", "♥", "♠", "♣"
    ];

    let randomCardSigns = Math.floor(Math.random() * 4);
    return cardSigns[randomCardSigns];
}


let randomSigns = generateRandomSign()

let signColor = randomSigns == "♥" ? "red" :
    randomSigns == "♦" ? "red" : "black"
;
    
window.onload = () => {

    let body = document.body
    body.style.backgroundColor = "green"
    body.style.height = "100vh"
    body.style.display = "flex"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"


    let card = document.querySelector("#app")
    card.style.backgroundColor = "white"
    card.style.border = "1px solid black"
    card.style.height = "400px"
    card.style.width = "250px"
    card.style.borderRadius = "10px"
    card.style.padding = "15px"
    card.style.position = "relative"



    let containerImgOne = document.createElement("div")
    containerImgOne.textContent = randomSigns
    containerImgOne.style.position = "absolute"
    containerImgOne.style.top = "0px"
    containerImgOne.style.left = "10px"
    containerImgOne.style.width = "45px"
    containerImgOne.style.height = "45px"
    containerImgOne.style.margin = "0px"
    containerImgOne.style.fontSize = "70px"
    containerImgOne.style.color = signColor



    let containerImgTwo = document.createElement("div")
    containerImgTwo.textContent = containerImgOne.textContent
    containerImgTwo.style.position = "absolute"
    containerImgTwo.style.margin = "0px"
    containerImgTwo.style.right = "1px"
    containerImgTwo.style.top = "350px"
    containerImgTwo.style.height = "50px"
    containerImgTwo.style.width = "50px"
    containerImgTwo.style.fontSize = "70px"
    containerImgTwo.style.color = signColor


    let containerNumber = document.createElement("p")
    containerNumber.textContent = generateRandomNumber()
    containerNumber.style.height = "75px"
    containerNumber.style.width = "75px"
    containerNumber.style.position = "absolute"
    containerNumber.style.top = "115px"
    containerNumber.style.height = "75px"
    containerNumber.style.right = "90px"
    containerNumber.style.fontSize = "70px"








    card.appendChild(containerImgOne)
    card.appendChild(containerImgTwo)
    card.appendChild(containerNumber)

};