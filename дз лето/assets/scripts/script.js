$(document).ready(function() {

	let question = {};

	let v = 0;

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

		$('.answer-1').click(function(){
			questions[v] = true;
			alert(questions);
			v = v + 1;
			
		})

		$('.answer-2').click(function(){
			questions[v] = false;
			alert(questions);
			v = v + 1;
		})

		if (questions[0] == true) {
			$(".question").innerHTML="Новый текст!";
		}

		if (questions[0] == true && questions[1] == true)  {
			alert(2);
		}

		if (questions[0] == true && questions[1] == true && questions[2] == true) {
			alert(3);
		}
});