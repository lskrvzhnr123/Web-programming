var bannerImg = document.getElementById('banner');
var thumbImg = document.getElementById('thumb').getElementsByTagName('img');

for (var i = 0; i < thumbImg.length; i++) {
	thumbImg[i].addEventListener('click', box);
}

function box() {
	var imgSrc = this.getAttribute('src');

	bannerImg.innerHTML = "<img src="+imgSrc+">" ;
}