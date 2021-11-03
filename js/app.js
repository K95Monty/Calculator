let currentDisplay = document.getElementById("current-display");
let prevDisplay = document.getElementById("prev-display");
let buttons = Array.from(document.getElementsByClassName("buttons"));

//alternative to eval
function equals(equation) {
    return new Function('return ' + equation)();
}
  
buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText) {
            case "AC":
                currentDisplay.innerText = "";
                prevDisplay.innerText = "";
                break;
            case "DEL":
                if(currentDisplay.innerText) {
                    currentDisplay.innerText = currentDisplay.innerText.slice(0, - 1);
                }
                break;
            case ".":
                if(!currentDisplay.innerText.includes(".")) {
                    currentDisplay.innerText += "."
                }
                break;
            case "=":
                try {
                    currentDisplay.innerText = equals(currentDisplay.innerText);
                    prevDisplay.innerText = currentDisplay.innerText;
                    prevDisplay.innerText = equals(currentDisplay.innerText);
                    if (currentDisplay.innerText === "5318008") {
                        currentDisplay.innerText = "Hehe boobies ;)";
                        prevDisplay.style.transform = "rotate(180deg)";
                    }
                }
                catch(error) {
                    currentDisplay.innerText = "Error";
                }
                break; 
            default:
                currentDisplay.innerText += e.target.innerText;
                break;
        }
        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
    })
})  