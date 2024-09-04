const display = document.getElementById('display');

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += ` ${operator} `;
}

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.innerText.replace(/[^-()\d/*+.%]/g, '');
        
                if (expression.includes('% 0')) {
            display.innerText = '0';
        } else {
            let result = eval(expression);
            
            if (isNaN(result)) {
                display.innerText = '0';
            } else {
                display.innerText = result;
            }
        }
    } catch {
        display.innerText = 'Error';
    }
}
