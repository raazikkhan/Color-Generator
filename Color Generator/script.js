const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomColor = "#" + randomNumber.toString(16)
    document.getElementById("color-code").innerText = randomColor;

    document.body.style.backgroundColor = randomColor;
    

    //for coping the Hex color 
    navigator.clipboard.writeText(randomColor)
}
document.getElementById("btn").addEventListener("click",getColor)
getColor();