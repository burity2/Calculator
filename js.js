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

