function CF() {
	var c = document.getElementById('C').value;
	document.getElementById('result1').value = c * 9 / 5 + 32;
}

function FC() {
	var f = document.getElementById('F').value;
	document.getElementById('result2').value = 5 * (f - 32) / 9;
}