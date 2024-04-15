let input = document.getElementById('value');
let equal = document.querySelector('.equal');
let reset = document.querySelector('.reset');
let del = document.querySelector('.del'); // Added this line
let btns1 = document.querySelectorAll('.btn1');

btns1.forEach(btn1 => {
    btn1.addEventListener('click', function() {
        let btnValue = this.value;
        input.textContent += btnValue;
    });
});

equal.addEventListener('click', function() {
    let expression = input.textContent;
    let result;
    if(expression === '8072184554'){
        input.textContent = "I LOVE U NASREEN"
        return
    }
    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }
    input.textContent = result;
});

reset.addEventListener('click', function() {
    input.textContent = '';
});

del.addEventListener('click', function() {
    let currentValue = input.textContent;
    input.textContent = currentValue.slice(0, -1); // Remove the last character
});
