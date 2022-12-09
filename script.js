class Calculator {
    constructor(displayNum) {
        this.displayNum = displayNum;
    }

    appendNum(number) {
        if (displayNum.innerText == 0) {
            displayNum.innerText = "";
            displayNum.innerText += number.toString()
        } else {
            displayNum.innerText += number.toString()
        }
        return displayNum.innerText;
    }

    addingIntoNums(number) {
        if (symbol == 0) {
            num1 += number.toString()
            console.log(num1);
        } else {
            num2 += number.toString()
            console.log(num2);
        }
    }

    addingIntoSymbol(symb) {
        switch (symb) {
            case "+":
                symbol = symb;
                displayNum.innerText += symbol.toString();
                console.log(symbol);
                break;
            case "-":
                symbol = symb;
                displayNum.innerText += symbol.toString();
                console.log(symbol);
                break;
            case "x":
                symbol = symb;
                displayNum.innerText += symbol.toString();
                console.log(symbol);
                break;
            case "/":
                symbol = symb;
                displayNum.innerText += symbol.toString();
                console.log(symbol);
                break;
            case "%":
                symbol = symb;
                console.log(symbol);
                break;
            default:
                console.alert("Something is wrong")
                break;
        }
    }

    counting(number1, number2) {
        switch (symbol) {
            case "+":
                result = parseFloat(number1) + parseFloat(number2);
                console.log(result);
                displayNum.innerText = result.toFixed(2).replace(/[.,]00$/, "");
                break;
            case "-":
                result = parseFloat(number1) - parseFloat(number2);
                console.log(result);
                    displayNum.innerText = result.toFixed(2).replace(/[.,]00$/, "");
                break;
            case "x":
                result = parseFloat(number1) * parseFloat(number2);
                console.log(result);
                displayNum.innerText = result.toFixed(2).replace(/[.,]00$/, "");
                break;
            case "/":
                result = parseFloat(number1) / parseFloat(number2);
                console.log(result);
                displayNum.innerText = result.toFixed(2).replace(/[.,]00$/, "");
                break;
            default:
                console.log("ERROR");
                break;
        }
    }

    percentage(number1) {
        result = parseInt(number1) / 100;
        console.log(result)
        displayNum.innerText = result;
    }

    plusMinus(number1, number2) {
        const symb = "-";
        if (number2 == "") {
            let result = symb.concat(number1)
            num1 = result;
            displayNum.innerText = result.toString();
        } else {
            let result = symb.concat(number2)
            num2 = result;
            displayNum.innerText = number1.toString() + symbol + result.toString();
        }
    }

    disablingButtons() {
        allButtons.forEach((button) => {
            if (button.id != "clearButton") {
                button.classList.add("disabled-btns");
                clearButton.classList.remove("button");
                clearButton.classList.add("redButton");
            }
        })
    }

    enablingButtons() {
        allButtons.forEach((button) => {
            if (button.id != "clearButton") {
                button.classList.remove("disabled-btns");
                clearButton.classList.remove("redButton");
                clearButton.classList.add("button");
            }
        })
    }

    clear() {
        displayNum.innerText = 0;
        num1 = "";
        num2 = "";
        symbol = 0;
    }
}
let num1 = "";
let num2 = "";
let symbol = 0;
let result = 0;
const displayNum = document.querySelector("#displayNum");

const calculator = new Calculator(displayNum);

const buttons = document.querySelectorAll("[data-number]");
const operateButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelector("#clearButton");
const equal = document.querySelector("#equal");
const percentageButton = document.querySelector("#percentage");
const plusMinusButton = document.querySelector("#plusMinusButton");
const allButtons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        calculator.appendNum(btn.innerText);
        calculator.addingIntoNums(btn.innerText);
    })
})

operateButtons.forEach(operBtn => {
    operBtn.addEventListener("click", () => {
        calculator.addingIntoSymbol(operBtn.innerText);
    })
})

equal.addEventListener("click", () => {
    calculator.counting(num1, num2);
    calculator.disablingButtons();
})

percentage.addEventListener("click", () => {
    calculator.percentage(num1);
})

plusMinusButton.addEventListener("click", () => {
    calculator.plusMinus(num1, num2);
})



clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.enablingButtons();
})
