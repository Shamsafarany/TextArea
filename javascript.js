//get elements
const textArea = document.getElementById("inputText");
const countDisplay = document.querySelector(".counter");

textArea.addEventListener("input", function() {  
    const text = textArea.value;
    const count = text.length
    countDisplay.textContent = `${count} / 250`;
    if (count >= 250) {
        textArea.style.borderColor = "red";
        countDisplay.style.color = "red";
        textArea.style.color = "red";
    } else {
        countDisplay.style.color = "rgb(9, 84, 9)";
        textArea.style.borderColor = "rgb(9, 84, 9)";
        textArea.style.color = "black";
    }

})