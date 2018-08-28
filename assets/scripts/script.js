$(document).ready(function() {

	let question = {};

	let v = 0;

	var questionText = ('Вам хотелось бы создавать игры ?');

	let questions = [
			'.1',
			'.2',
			'.3',
			'.4',
			'.5',
			'.6',
			'.7',
			'.8',
			'.9',
			'.10',
			'.11',
			'.12',
			'.13',
			'.14'
		];

		function changeText(){
			document.getElementById('question').innerHTML = questionText;
		}

		function chengeAnswer(){
			document.getElementById('answer-1').innerHTML = ('да');
			document.getElementById('answer-2').innerHTML = ('нет');
		}

		chengeAnswer();
		changeText();

		$('.answer-1').click(function(){
			questions[v] = true ;
			alert(questions);
			v = v + 1;
		});

		$('.answer-2').click(function(){
			questions[v] = false;
			alert(questions);
			v = v + 1;
		});

		if (questions[0] == true) {
			questionText = ('Вам больше нравится визуальная часть игры или интересно узнать о том , как в играх можно применять программирование?');
			changeText()
			document.getElementById('answer-1').innerHTML = ('если код');
			document.getElementById('answer-2').innerHTML = ('если визуалка');
		}

		if (questions[0] == true && questions[1] == true)  {
			questionText = ('Вам больше тринадцати ?');
			changeText();
			chengeAnswer();
		}

		if (questions[0] == true && questions[1] == true && questions[2] == true) {
			questionText = ('Ваша рабочая среда : C#');

		}
});