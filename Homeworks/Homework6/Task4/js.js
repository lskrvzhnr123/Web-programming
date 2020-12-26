function Reverse() {
	var n = document.getElementById('number').value;
	var result = document.getElementById('result');
	var reverse = 0;

	while (n != 0) {
		reverse = (reverse * 10) + (n % 10);
		n = parseInt(n / 10);
	}
	document.getElementById('result').value = reverse;
	return false; 
}