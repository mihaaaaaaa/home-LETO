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
			'.6'
		];

		function changeText(){
			document.getElementById('question').innerHTML = questionText;
		}

		function chengeAnswer(){
			document.getElementById('answer-1').innerHTML = ('да');
			document.getElementById('answer-2').innerHTML = ('нет');
		}

		function removeAnsver(){
			document.getElementById('answer-1').remove();
			document.getElementById('answer-2').remove();
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
			changeText();
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
			changeText();
			removeAnsver();
		}

		if (questions[0] == true && questions[1] == true && questions[2] == false) {
			questionText = ('Ваша рабочая среда : Gamedev');
			changeText();
			removeAnsver();
		}

		if (questions[0] == true && questions[1] == false) {
			questionText = ('Вы любите рисовать?');
			changeText();
			chengeAnswer();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == true) {
			questionText = ('Вы бы выбрали рисовать на планшете или придумывать 3D-модэли в программе ?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('3D');
			document.getElementById('answer-2').innerHTML = ('Рисовать');
		}

		if (questions[0] == true && questions[1] == false && questions[2] == true && questions[3] == true) {
			questionText = ('Вам больше тринадцати ?');
			changeText();
			chengeAnswer();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == true && questions[3] == true && questions[4] == true) {
			questionText = ('Ваша рабочая среда : 3D');
			changeText();
			removeAnsver();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == true && questions[3] == true && questions[4] == false) {
			questionText = ('Ваша рабочая среда : Gamedev');
			changeText();
			removeAnsver();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == true && questions[3] == false) {
			questionText = ('Ваша рабочая направление : Концепт');
			changeText();
			removeAnswer();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == false && questions[3] == true) {
			questionText = ('Вам больше тринадцати ?');
			changeText();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == false && questions[3] == false) {
			questionText = ('Вам больше тринадцати ?');
			changeText();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == false && questions[3] == true && questions[4] == true) {
			questionText = ('Ваша рабочая среда : Lvl');
			changeText();
			removeAnswer();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == false && questions[3] == true && questions[4] == false) {
			questionText = ('Ваша рабочая среда : Gamedev');
			changeText();
			removeAnswer();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == false && questions[3] == false && questions[4] == true) {
			questionText = ('Ваша рабочая среда : 3D');
			changeText();
			removeAnswer();
		}

		if (questions[0] == true && questions[1] == false && questions[2] == false && questions[3] == false && questions[4] == false) {
			questionText = ('Ваша рабочая среда : Gamedev');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false) {
			questionText = ('Вам важно видеть визуальные результаты своей работы : Красивые картинки и анимации?');
			changeText();
		}

		if (questions[0] == false && questions[1] == true) {
			questionText = ('Предстаьте , что вам предстоит 5 часов подряд писать код для сайта. А теперь представьте , что вам необходимо 5 часов проектировать и отрисовывать сайт. Что бы вы выбрали ?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Рисовать');
			document.getElementById('answer-2').innerHTML = ('Прогать');
		}

		if (questions[0] == false && questions[1] == true && questions[2] == false) {
			questionText = ('Что кажется интереснее : делать сайты или мобильные преложения ?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Сайты');
			document.getElementById('answer-2').innerHTML = ('Телефоны');
		}

		if (questions[0] == false && questions[1] == true && questions[2] == true) {
			questionText = ('Ваша рабочая среда : Design');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == true && questions[2] == false  && questions[3] == false) {
			questionText = ('Ваша рабочая среда : Android');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == true && questions[2] == false  && questions[3] == true) {
			questionText = ('Для вас интереснее делать анимационные иконки сайта , крутые кнопки и слайдеры или вас больше интересует работа сайта изнутри - работа с базами данных , сервером и сложными техническими вещами?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Front');
			document.getElementById('answer-2').innerHTML = ('Back');
		}

		if (questions[0] == false && questions[1] == true && questions[2] == false  && questions[3] == true && questions[4] == true) {
			questionText = ('Таблица говорит : Front');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == true && questions[2] == false  && questions[3] == true && questions[4] == false) {
			questionText = ('Таблица говорит : Back');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false) {
			questionText = ('Вы любите математику?');
			changeText();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true) {
			questionText = ('Вы готовы углубляться в знаниях по математике?');
			changeText();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == false) {
			questionText = ('Что кажется интереснее : делать сайты или мобильные преложения ?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Сайты');
			document.getElementById('answer-2').innerHTML = ('Телефоны');
		}

		if (questions[0] == false && questions[1] == false && questions[2] == false && questions[3] == false) {
			questionText = ('Ваша рабочая среда : Android');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == false && questions[3] == true) {
			questionText = ('Для вас интереснее делать анимационные иконки сайта , крутые кнопки и слайдеры или вас больше интересует работа сайта изнутри - работа с базами данных , сервером и сложными техническими вещами?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Front');
			document.getElementById('answer-2').innerHTML = ('Back');
		}

		if (questions[0] == false && questions[1] == false && questions[2] == false && questions[3] == true && questions[4] == true) {
			questionText = ('Таблица говорит : Front');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == false && questions[3] == true && questions[4] == false) {
			questionText = ('Таблица говорит : Back');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true && questions[3] == true) {
			questionText = ('Ваша рабочая среда : ML');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true && questions[3] == false) {
			questionText = ('Что кажется интереснее : делать сайты или мобильные преложения ?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Сайты');
			document.getElementById('answer-2').innerHTML = ('Телефоны');
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true && questions[3] == false && questions[4] == false) {
			questionText = ('Ваша рабочая среда : Android');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true && questions[3] == false && questions[4] == true) {
			questionText = ('Для вас интереснее делать анимационные иконки сайта , крутые кнопки и слайдеры или вас больше интересует работа сайта изнутри - работа с базами данных , сервером и сложными техническими вещами?');
			changeText();
			document.getElementById('answer-1').innerHTML = ('Front');
			document.getElementById('answer-2').innerHTML = ('Back');
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true && questions[3] == false && questions[4] == true && questions[5] == true ) {
			questionText = ('Таблица говорит : Front');
			changeText();
			removeAnswer();
		}

		if (questions[0] == false && questions[1] == false && questions[2] == true && questions[3] == false && questions[4] == true && questions[5] == false) {
			questionText = ('Таблица говорит : Back');
			changeText();
			removeAnswer();
		}
});