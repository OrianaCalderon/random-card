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

    let containerImg= document.createElement("div")
    containerImg.textContent="imagen1"
    card.appendChild(containerImg)
    containerImg.style.position="absolute"
    containerImg.style.positionTop="0px"
    containerImg.style.positionLeft="0px"


    let containerNumber= document.createElement("p")
    containerNumber.textContent="numero"
    card.appendChild(containerNumber)

    let containerImgTwo= document.createElement("div")
    containerImgTwo.textContent="imagen2"
    card.appendChild(containerImgTwo)
    containerImgTwo.style.position="absolute"
    containerImgTwo.style.positionBottom="0px"
    containerImgTwo.style.positionRight="0px"

    let img = ["♦","♥" ,"♠" ,"♣"]
    let numeros =["A", 1,2,3,4,5,6,7,8,9,10,"J","Q","K"]


    


    


}