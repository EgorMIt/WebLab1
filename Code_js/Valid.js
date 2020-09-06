let input = document.getElementById("y_param");
let value_X = -2;
let value_Y = 0;
let flag = true;

function set_x_value(){
	value_X = document.getElementById("Select_x").options[document.getElementById("Select_x").
		options.selectedIndex].value;
	document.getElementById('label_x').innerText = "X = " + value_X;
}


function chek_input(){
	if(!/^-?\d+(\.|,)?\d*$/i.test(input.value)){
		alert("Значение \"Y\" не валидно");
		input.value = "";
		flag = false;
	}else if(input.value.replace(/[,]/,".") >= -5 && input.value.replace(/[,]/,".") <= 5){
		if(/(\.|,)$/i.test(input.value)){
			alert("Значение \"Y\" не валидно");
			input.value = "";
			flag = false;
		}else{
			value_Y = input.value.replace(/[,]/,".");
			document.getElementById('label_y').innerText = "Y = " + input.value;
			flag = true;
		}
	}else if(/(\.|,)$/i.test(input.value)) {
		alert("Значение \"Y\" не валидно");
		input.value = "";
		flag = false;
	}else{
		alert("Выход за пределы, введите число в интервале [-5;5]");
		flag = false;
	}
}

let button = document.getElementById("button");

button.onclick = function() {
	chek_input();
	if(flag) {
		getData();
	}
}