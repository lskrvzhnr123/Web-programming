function submitForm(e) {
e.preventDefault();
let name = document.forms["welcome"]["name"].value;
sessionStorage.setItem("name", name);
location.href = "Quiz.html";
}


let score = 0;

function checkAnswer() {
	var result = 0;
	$.each(jsonObject, function(i, item) {
		var elements = document.getElementsByName(i);

	    for (var j=0, len=elements.length; j<len; ++j)
	    {

	        if (elements[j].checked && elements[j].value == item.answer) result += 1;
	    }
	});

let summary = document.getElementById('summary').innerHTML="Score = " + result + "/5";
}


