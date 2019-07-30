var num1 = prompt('Insert first number:');

var calculate = prompt('Choose operator (+,-,: or *)');

var num2 = prompt('Insert second number:');



if(calculate === '*'){
    var answer = num1 * num2;
    alert('Your answer:'+ answer);
}
else if(calculate === '+'){
    var answer = +num1 + +num2;
    alert('Your answer:'+ answer);
}
else if(calculate === '-'){
    var answer = num1 - num2;
    alert('Your answer:'+ answer);
}
else if(calculate === '/'){
    var answer = num1 / num2;
    alert('Your answer:'+ answer);
}
else{
    alert('Insert correct imput');
}