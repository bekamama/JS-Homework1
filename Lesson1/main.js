console.log("this is working")

// Homework 1A
function compare(a, b) {
    if (a == b) {
        return "equal";
    } else {
        return "Not equal";
    }
}

console.log(compare(500, "500")); 
console.log(compare(500, 27));   



function compare(a, b) {
    if (a === b) {
        return "equal";
    } else {
        return "Not equal";
    }
}

console.log(compare(500, 500)); 
console.log(compare(500, 27)); 


// Homework 1B

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        return false;
    }

    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}


console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(100)); 
console.log(fahrenheitToCelsius('100')); 


// Homework 1C

function calculate(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        return false;
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            
            if (b === 0) {
                return false;
            }
            return a / b;
        default:
            return false;
    }
}


console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/')); 
console.log(calculate(10, 0, '/')); 
console.log(calculate(10, '5', '+'));
console.log(calculate(10, 5, '%'));




