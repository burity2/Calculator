// basic functions and operations
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const operate = (a, n, b) => {
    if (n == "e") {
        return add(a, b);
    } else if (n == "s"){
        return subtract(a, b);
    } else if (n == "m"){
        return multiply(a, b);
    } else if (n == "d"){
        return divide(a, b);
    }
};

// VISOR
const visor = document.getElementById("visor")
// var that stores the numbers
const visorDisplay = []

const buttonToVisor = document.getElementById("container")
buttonToVisor.addEventListener("click", (event) => {
    const buttonClicked = event.target;
    if (visorDisplay.length >= 14) {
        
    } else {
    switch(buttonClicked.id) {
        case "7":
            visorDisplay.push(7);
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "8":
            visor.innerHTML = visorDisplay.push(8)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "9":
            visor.innerHTML = visorDisplay.push(9)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "4":
            visor.innerHTML = visorDisplay.push(4)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "5":
            visor.innerHTML = visorDisplay.push(5)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "6":
            visor.innerHTML = visorDisplay.push(6)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "1":
            visor.innerHTML = visorDisplay.push(1)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "2":
            visor.innerHTML = visorDisplay.push(2)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "3":
            visor.innerHTML = visorDisplay.push(3)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "zero":
            visor.innerHTML = visorDisplay.push(0)
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            break;
        case "dot":
            if (visorDisplay.includes(".") == true) {

            } else {
                visor.innerHTML = visorDisplay.push(".")
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            }
            break;
    }
}
})

```
        case "plus":
            break;
        case "minus":
            break;
        case "times":
            break;
        case "divide":
            break;
```