function clearentry()
{
    document.calc.display.value='';
    currentOperand = null;
    operator = null;
}

function cleardisplay()
{
    document.calc.display.value='';
}

function backspace()
{
    let displayvalue=document.calc.display.value;
    document.calc.display.value=displayvalue.substr(0,displayvalue.length-1);

}

function toggleSign()
{
    let displayvalue=document.calc.display.value;
    if(displayvalue.charAt(0)==='-')
        document.calc.display.value=displayvalue.substr(1)
    else
        document.calc.display.value='-'+ displayvalue
}

function calculate(operation)
{
    let displayvalue=document.calc.display.value;
    // let result;

    if(operation==='%'){
        document.calc.display.value=eval(displayvalue)/100;
    }
    else if(operation=== '1/x'){
        document.calc.display.value=1/eval(displayvalue);
    }
    else if(operation==='√x'){
        document.calc.display.value=Math.sqrt(eval(displayvalue));
    }
    else if(operation==='x²'){
        document.calc.display.value=Math.pow(eval(displayvalue),2);
    }

    document.calc.display.value = result;
    
    // Add the calculation to the history
    // updateHistory(`${displayvalue} ${operation}`, result);
}