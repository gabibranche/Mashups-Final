var languages=['fr', 'de', 'ru', 'zh', 'es', 'en'];
var wordText;
var translation=[];		
var index = 0;


//Function executed when person submits a word			
function wordSubmitted() {

	var wordText = document.getElementById("wordSubmit").value;
	
	let data = {wordText: wordText}


	// $.post("http://localhost:3000/wordsInputted/words", {
	// 	wordText: wordText,
	// }, function (data, status){
	// 	console.log(status);
	// })


	for ( var i=0; i<languages.length; i++) {
		$.ajax({
			url: "https://translate.yandex.net/api/v1.5/tr.json/translate"+
			 "?key=trnsl.1.1.20191106T102433Z.735128d1d604053b.d023b232825c4c9e988730609f5d238455087492" +
			 "&text=" + wordText +
			 "&lang=en-" + languages[i] +
			 "&[format=plain]" +
			 "&[options=lang]" +
			 "&[callback=getMov]",
			method: 'GET',
		}).done(function(result) {

			 
			console.log(result.text[0]); 
			translation.push(result.text[0]);

		

			if (translation.length >= languages.length) {
				console.log("DONE");

				dispTranslation();
			}
			
			//fail safe function in the event that the get function does not work	
		}).fail(function(err) {
			throw err;
		});
	}

		

	document.getElementById("headline").innerHTML = 'LOADING...';

		$.post("http://localhost:3000/wordsInputted/words", {
		wordText: wordText,
		}, function (data, status){
		console.log(status);
		})
}


function dispTranslation() {

	if (index < translation.length) {
		document.getElementById("headline").innerHTML = translation[index]; 
		console.log(translation[index]);
		index++;
		setTimeout(dispTranslation, 1000);
	}

}