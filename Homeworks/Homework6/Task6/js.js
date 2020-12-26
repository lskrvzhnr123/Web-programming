function Circle() {
	var circle = document.getElementById('circle');
	var ctx = circle.getContext("2d");

	ctx.arc(100,80,50,0,2 * Math.PI);
	ctx.strokeStyle = "red";
	ctx.stroke();

}