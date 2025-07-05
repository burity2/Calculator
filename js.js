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
    if (b == 0) {
    return "( ͡° ͜ʖ ͡° )"
    } else {
    return (a / b).toFixed(10);
    }
  
};

// combines the two numeric entries ("a" and "b") with an operator symbol "n"
const operate = (a, n, b) => {
    if (n == "+") {
        return add(a, b);
    } else if (n == "−"){
        return subtract(a, b);
    } else if (n == "x"){
        return multiply(a, b);
    } else if (n == "÷") {
        return divide(a, b);
    }
};

//function that highlights buttons (under work)
const highlighter = (buttonId) => {
    const operButtons = document.getElementsByClassName("oper");
    for (i=0; i <= operButtons.length; i++) {
        operButtons[i].setAttribute("style", "background-color = #69809e;");
    }
    document.getElementById(buttonId).setAttribute("style", "background-color = #95c5ac;");

}

// VISOR
const visor = document.getElementById("visor")

// var that stores the numbers
let visorDisplay = []
visor.innerText = 0

//var that defines the operator symbol ("+", "−", "÷", "x")
let n = 0

// this puts the numbers into the visor
const buttonToVisor = document.getElementById("container")
const buttonPusher = buttonToVisor.addEventListener("click", (event) => {
    const buttonClicked = event.target;
    if (visorDisplay.length >= 14) {
        
    } else {
    switch(buttonClicked.id) {
        case "7":
            visor.innerHTML = visorDisplay.push(7);
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
            break;
            } else if (visor.innerText = 0){
            visor.innerHTML = visorDisplay.push("0.")
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            } else {
                visor.innerHTML = visorDisplay.push(".")
            visor.innerHTML = visorDisplay.toString().replace(/,/g,"")
            }
            break;
    }
}
})

//plus button
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", () => {
    let visorNumber = visorDisplay.toString().replace(/,/g,"")
        document.getElementById("plus").style.backgroundColor = "#95c5ac";
        document.getElementById("minus").style.backgroundColor = "#69809e";
        document.getElementById("times").style.backgroundColor = "#69809e";
        document.getElementById("divide").style.backgroundColor = "#69809e";
    if (n != 0) {
        // this allows consecutive operations without pressing the "=" key
        visor.innerText = operate(+a, n, +visorNumber)
        n = "+"
        a = visor.innerText
        visorDisplay = []

    } else {
        a = visorNumber
        n = "+"
        visorDisplay = []
    }
})

// minus button
const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", () => {
    let visorNumber = visorDisplay.toString().replace(/,/g,"")
        document.getElementById("plus").style.backgroundColor = "#69809e";
        document.getElementById("minus").style.backgroundColor = "#95c5ac";
        document.getElementById("times").style.backgroundColor = "#69809e";
        document.getElementById("divide").style.backgroundColor = "#69809e";
    if (n != 0) {
        //same as plus button
        visor.innerText = operate(+a, n, +visorNumber)
        n = "−"
        a = visor.innerText
        visorDisplay = []

    } else {
        a = visorNumber
        n = "−"
        visorDisplay = []
    }
})

const timesButton = document.getElementById("times");
timesButton.addEventListener("click", () => {
    let visorNumber = visorDisplay.toString().replace(/,/g,"")
        document.getElementById("plus").style.backgroundColor = "#69809e";
        document.getElementById("minus").style.backgroundColor = "#69809e";
        document.getElementById("times").style.backgroundColor = "#95c5ac";
        document.getElementById("divide").style.backgroundColor = "#69809e";
    if (n != 0) {
        //same as plus button
        if (+visorNumber == 0) {
            //sadly a nested if statement, but this allow for the times operator not to display 0 if pressed twice
            +visorNumber == 1
        } else {
        visor.innerText = operate(+a, n, +visorNumber)
        n = "x"
        a = visor.innerText
        visorDisplay = []
        }

    } else {
        a = visorNumber
        n = "x"
        visorDisplay = []
    }
})

const divideButton = document.getElementById("divide");
divideButton.addEventListener("click", () => {
    let visorNumber = visorDisplay.toString().replace(/,/g,"")
        document.getElementById("plus").style.backgroundColor = "#69809e";
        document.getElementById("minus").style.backgroundColor = "#69809e";
        document.getElementById("times").style.backgroundColor = "#69809e";
        document.getElementById("divide").style.backgroundColor = "#95c5ac";
    if (n != 0) {
        // same as plus button
            if (+visorNumber == 0) {
            //same as the times nested if statement
            +visorNumber == 1
            } else {
        visor.innerText = operate(+a, n, +visorNumber)
        n = "÷"
        a = visor.innerText
        visorDisplay = []
        }

    } else {
        a = visorNumber
        n = "÷"
        visorDisplay = []
    }
})

const equalButton = document.getElementById("eq")
equalButton.addEventListener("click", () => {
    let visorNumber = visorDisplay.toString().replace(/,/g,"")

            document.getElementById("plus").style.backgroundColor = "#69809e";
            document.getElementById("minus").style.backgroundColor = "#69809e";
            document.getElementById("times").style.backgroundColor = "#69809e";
            document.getElementById("divide").style.backgroundColor = "#69809e";
            visor.innerText = operate(+a, n, +visorNumber)
            a = visor.innerText
            visorDisplay = []

})


const clearButton = document.getElementById("clear")
clearButton.addEventListener("click", () => {
            a = 0
            n = 0
            visorDisplay = []
            visor.innerText = 0
            document.getElementById("plus").style.backgroundColor = "#69809e";
            document.getElementById("minus").style.backgroundColor = "#69809e";
            document.getElementById("times").style.backgroundColor = "#69809e";
            document.getElementById("divide").style.backgroundColor = "#69809e";
    })
