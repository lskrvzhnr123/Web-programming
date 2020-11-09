var bannermenImg = document.getElementById('bannermen');
var gallerymenImg = document.getElementById('gallerymen').getElementsByTagName('img');


for (var j = 0; j < gallerymenImg.length; j++) {
	gallerymenImg[j].addEventListener('click', box);
}

function box() {
	var imgSrc = this.getAttribute('src');

	bannermenImg.innerHTML = "<img src="+imgSrc+">" ;
}

var bannerwomenImg = document.getElementById('bannerwomen');
var gallerywomenImg = document.getElementById('gallerywomen').getElementsByTagName('img');


for (var i = 0; i < gallerywomenImg.length; i++) {
	gallerywomenImg[i].addEventListener('click', box2);
}

function box2() {
	var imgSrc = this.getAttribute('src');

	bannerwomenImg.innerHTML = "<img src="+imgSrc+">" ;
}

var a = document.body || document.getElementsByTagName('body')[0];
a.insertAdjacentHTML('beforeend', '<button onclick="topFunction()" id="toUp" title="Up"><img src="images/up.png"</button>');

document.getElementById("toUp").setAttribute("style", "display: none; position: fixed; bottom: 18px; right:18px; z-index:1000; border: none; outline: none; background: none; cursor: pointer;");

document.documentElement.setAttribute("style", "scroll-behaviour: smooth;")

window.onscroll = function(){
	scrollFunction()
};

function scrollFunction(){
	let b = document.getElementById("toUp");
	if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480){
		b.style.display = "block";
	} else {
		b.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

