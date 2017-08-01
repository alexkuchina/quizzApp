
var quizQA = [
	{
		question: "Name the world's largest ocean",
		answer: "pacific",
	},
	{
		question: "Name the seventh planet from the sun",
		answer: "uranus",
	},
	{
		question: "If you were born on the 8th April, which star sign would you belong to?",
		answer: "aries",
	},
	{
		question: "What does the N stand for in NATO?",
		answer: "north",
	},
	{
		question: "If you had Lafite-Rothschild on your dinner table, what would it be?",
		answer: "wine"
	}
];

for(i = 0; i < quizQA.length; i++){
var question = quizQA[i].question;
var htmlQuest = document.getElementById('question' + [i]);
htmlQuest.textContent = question;
}

var checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', function(){

	var correct = 0;
	var incorrect = 0;

	for(i = 0; i < quizQA.length; i++){

		var varAnswer = quizQA[i].answer;
		var yourAnswer = document.getElementById('answer' + [i]).value;
		var quest = document.getElementById('question' + [i]);

		if(varAnswer == yourAnswer.toLowerCase()) {
			quest.className = "correct";
			correct++;
		

		} else {
			quest.className = "incorrect";
			incorrect++;
		}
}

document.getElementById('green').textContent = " - " + correct;
document.getElementById('red').textContent = " - " + incorrect;
	
});


































