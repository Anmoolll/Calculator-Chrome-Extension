function calculate(expression) {
    const operators = ["+", "-", "*", "/"];
    const [operand1, operator, operand2] = expression.split(/\s+/);
  
    if (!operators.includes(operator) || isNaN(operand1) || isNaN(operand2)) {
      return "Invalid expression";
    }
  
    switch (operator) {
      case "+":
        return parseFloat(operand1) + parseFloat(operand2);
      case "-":
        return parseFloat(operand1) - parseFloat(operand2);
      case "*":
        return parseFloat(operand1) * parseFloat(operand2);
      case "/":
        if (parseFloat(operand2) === 0) {
          return "Division by zero";
        }
        return parseFloat(operand1) / parseFloat(operand2);
    }
  }
  let userInput = '2+23'
  const result = calculate(userInput);

  console.log(result);