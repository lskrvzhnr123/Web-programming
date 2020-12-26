const count =  () => {
	let text = document.getElementById('text').value;
	res1 = text.length;
	let data1 = document.getElementById('data1').innerHTML = "Characters = " + res1; 

	let text2 = text.match(/\w+/g); 
	output2 = text2.length;
	let data2 = document.getElementById('data2').innerHTML="Words = " + output2;


	let text3 = text.split(".");
	output3 = text3.length-1;
	let sentences = document.getElementById('data3').innerHTML="Sentences = " + output3;

	let text4 = text.replace(/\n$/gm, '').split(/\n/).length;
	let paragraphs = document.getElementById('data4').innerHTML="Paragraphs = " + text4;

	const avgWordsPerMin = 200;
	let count = text.split(/\s/g).length;
	let time = Math.ceil(count / avgWordsPerMin);
	let readingtime = document.getElementById('data5').innerHTML="Reading time = " + time + "m";

	let words = text.join("\n");
	let top = words.split(/\W+/);
	for(var i = 0; i<top.length; i++){
		let word = top[i].toLowerCase();
		if(!/\d+/.test(word)){
			
		}
	}

}	














-5