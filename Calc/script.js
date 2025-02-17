function insertNumber(number){
    var existingNumbers = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = existingNumbers + number;
}

function insertOperator(operator){
    var existingNumbers = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = existingNumbers + operator;
}

function clearResult(){
    document.getElementById('result').innerHTML = '';
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    try {
        document.getElementById('result').innerHTML = eval(result);
    } catch (e) {
        document.getElementById('result').innerHTML = 'Erro';
    }
}

function calculateSquareRoot(){
    var result = document.getElementById('result').innerHTML;
    try {
        document.getElementById('result').innerHTML = Math.sqrt(eval(result));
    } catch (e) {
        document.getElementById('result').innerHTML = 'Erro';
    }
}