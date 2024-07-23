let currentInput ="";
let calculation  =[];

// let display =document.getElementById('display').value;

function claculator(number){
    currentInput += number;
    document.getElementById('display').value= currentInput;
}
    
function claculatoroperator(operator){
    if(currentInput!= ""){
        calculation.push(currentInput);
        calculation.push(operator);
        currentInput='';
    }

}

function clearnum(){
    currentInput ="";
    calculation  =[];
    document.getElementById('display').value= "";
}

function equal(){
    if (currentInput !== '') {
        calculation.push(currentInput);
        const result = eval(calculation.join(' '));
        document.getElementById('display').value = result;
        currentInput = result.toString();
        calculation = [];
    }
}