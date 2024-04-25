

let string = ''
let buttons = document.querySelectorAll('.button')

function calculate(expression) {
    let [a, operator, b] = expression.split(' ');
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: throw new Error('Unknown operator');
    }
}


Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = calculate(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1)
            document.querySelector('input').value = string;
        }
        else{
            if(['+', '-', '*', '/'].includes(e.target.innerHTML)){
                string = string + ' ' + e.target.innerHTML + ' ';
            }else{
                string = string + e.target.innerHTML;
            }
            document.querySelector('input').value = string;
        }
    })
})


let result = calculate('2-1');
console.log(result);