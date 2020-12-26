function Circles() {
	var circles = document.getElementById('circle');
	var ctx = circles.getContext("2d");
	var number = 0;

	for (var i = 0; i < 6; i++){
		for (var j = 0; j < 6; j++) {
			ctx.fillStyle = "rgb(" + Math.floor(255-42.5*i) + "," + Math.floor(255-42.5*i) +
  				"," + Math.floor(255-42.5*j) + ")";

	ctx.beginPath();
  		if (i === number && j === number){
  			ctx.arc(35+j*60,40+i*60,30,0,Math.PI*2,true);
 			ctx.fill();
  			ctx.stroke();
  		} 
	}
  	number++;
  	}
  }
  Circles();
		
	