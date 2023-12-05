
function getData() {
	let text;

	let loginText = document.getElementById("login").value;
	let passText = document.getElementById("pass").value;
	let textWrapper = document.getElementById("text-wrapper");

	if (loginText == "" || passText == "") {
		text = "Обязательное поле не заполнено";
		textWrapper.classList.add('text-red');
		textWrapper.classList.remove('text-green');
	} else {
		text = "Поля заполнены корректно";
		textWrapper.classList.add('text-green');
		textWrapper.classList.remove('text-red');
	}

	document.getElementById("demo").innerHTML = text;
}

function toggleImage() {
	let imgBox = document.getElementById("img-box");
	console.log(imgBox);
	if (imgBox.style.display === "none") {
		imgBox.style.display = "block";
	} else {
		imgBox.style.display = "none";
	}
}

async function createUser() {
	let loginText = document.getElementById("login").value;
	let passText = document.getElementById("pass").value;
	let textWrapper = document.getElementById("text-wrapper");

	if (loginText == "" && passText == "") {
		text = "Обязательные поля \"Login\" и \"Password\" не заполнены";
		textWrapper.classList.add('text-red');
		textWrapper.classList.remove('text-green');
		document.getElementById("demo").innerHTML = text;
	} else if (loginText == "") {
			text = "Обязательное поле \"Login\" не заполнено";
			textWrapper.classList.add('text-red');
			textWrapper.classList.remove('text-green');
			document.getElementById("demo").innerHTML = text;
	} else if (passText == "") {
		text = "Обязательное поле \"Password\" не заполнено";
		textWrapper.classList.add('text-red');
		textWrapper.classList.remove('text-green');
		document.getElementById("demo").innerHTML = text;
	} else {
		text = "Обязательные поля \"Login\" и \"Password\" заполнены корректно. Запрос отправлен!<br><br>Через 5 секунд получим ответ с сервера";
		textWrapper.classList.add('text-green');
		textWrapper.classList.remove('text-red');

		let xhr = new XMLHttpRequest();

		let json = JSON.stringify({
			"id": 103,
			"username": loginText,
			"firstName": loginText,
			"email": loginText + "_007@gmail.com",
			"password": passText,
			"phone": "+79998887766",
			"userStatus": 103
		});

		xhr.open("POST", 'https://petstore.swagger.io/v2/user')
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	  
		xhr.send(json);
		xhr.onload = function() {
			if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
				console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
			} else { // если всё прошло гладко, выводим результат
				console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
			}
		};

		document.getElementById("demo").innerHTML = text;

		window.setTimeout(getUser, 5000);

	}

	function getUser() {
		let data = {};
		let xhr = new XMLHttpRequest();
	  
		xhr.open("GET", 'https://petstore.swagger.io/v2/user/' + loginText);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	  
		xhr.send();
		xhr.onload = function() {
			if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
				console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
			} else { // если всё прошло гладко, выводим результат
				console.log(`Готово, получили ${xhr.response.length} байт`);
				data = JSON.parse(xhr.responseText);
				console.log('result', JSON.parse(xhr.responseText)) // response -- это ответ сервера

				document.getElementById("username").innerHTML = data.username;
				document.getElementById("email").innerHTML = data.email;
				document.getElementById("password").innerHTML = data.password;

				let respInfo = document.getElementById("respInfo");
				respInfo.style.display = "block";

				document.getElementById("demo").innerHTML = "Данные получены корректно!";
			}
		};
	}
}

function addLocalStorage() {
	localStorage.setItem('name', 'John Smith');
	localStorage.setItem('age', '30');
	localStorage.setItem('role', 'Administrator');
}

function getLocalStorage() {
	let name = localStorage.getItem('name');
	let age = localStorage.getItem('age');
	let role = localStorage.getItem('role');
	document.getElementById("name").innerHTML = name;
	document.getElementById("age").innerHTML = age;
	document.getElementById("role").innerHTML = role;
}

function removeLocalStorage() {
	localStorage.clear();
}

function generateError() {
	let name = "Ivan"

	try {
	  alerqqt("Урааа...! Все работает отлично! "); // Намеренно допустили опечатку в названии метода (alert), чтобы воспроизвести ошибку в "console"
	}
	catch(err) {
	  var e = new Error('Нет доступа к серверу!');
	  throw e;
	}
}