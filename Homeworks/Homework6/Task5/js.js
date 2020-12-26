function Rectangular(){
	var rec = document.getElementById('rec');
	var ctx = rec.getContext("2d");

	ctx.fillRect(20,20,150,150);
	ctx.clearRect(50,40,90,90);
	ctx.strokeRect(60,50,70,70);

	}
