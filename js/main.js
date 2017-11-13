var total = '';
var input = '';
var operator = '';

$(document).ready(function(){
	show_screen();
	input_received();
});

//Gets input and reacts accordingly
function input_received(){
	$('.button').click(function(button){
		if ($(this).hasClass("number")) {
			if (input.length < 22) {
				input += $(this).text();
				show_screen(input);
			}
		} else if ($(this).hasClass("negative")) {
			positive_negative();
			show_screen(input);
		} else if ($(this).hasClass("operator")) {
			calculate();
			operator = $(this).text();
			input = '';
			show_screen(total);
		} else if ($(this).hasClass("equals")){
			calculate();
			show_screen(total);
			console.log('The total is ' + total);
			total = '';
			input = '';
			operator = '';
		} else if ($(this).hasClass("clear")) {
			total = '';
			input = '';
			operator = '';
			show_screen();
		}
		clicked_to_console($(this).attr("class"), $(this).text());

	});
}

//shows the given output on the 'screen' section of the calculator
function show_screen(output = 0) {
	$('.output').text(output);
}

//Shows the button clicked, current input, and current total in the console
function clicked_to_console(classVal, button){
	console.log('------------');
	console.log( classVal + ' ' + button + ' clicked');
	console.log('Input: ' + input);
	console.log('Total: ' + total);
}

//Makes a calculation based on the input given.  If there is not a total yet, sets total to the current input.
function calculate() {
	if (total === '') {
		total = parseFloat(input);
	} else {
		switch(operator) {
			case '+':
				add(total, parseFloat(input));
				break;
			case '-':
				subtract(total, parseFloat(input));
				break;
			case '*':
				multiply(total, parseFloat(input));
				break;
			case '/':
				divide(total, parseFloat(input));
				break;
		}
	}
}

//Changes the current input between positive and negative
function positive_negative() {
	if (input.charAt(0) === '-') {
		input = input.replace('-', '');
	} else {
		input = '-' + input;
	}
}

//performs addition
function add(numOne, numTwo) {
	total = numOne + numTwo;
}

//performs subtraction
function subtract(numOne, numTwo) {
	total = numOne - numTwo;
}

//performs multiplication
function multiply(numOne, numTwo) {
	total = numOne * numTwo;
}

//performs divition
function divide(numOne, numTwo) {
	total = numOne / numTwo;
}

