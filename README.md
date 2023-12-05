<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Привет, мир!</title>

    <link rel="stylesheet" href="main.css">
  </head>
  <body>
    <div class="main-wrapp">
      	<div class="top-block">
    	    <h1>Тестирование WEB</h1>
        </div>

         <div class="img-wrapper">
            <div class="img-subwrapper" id="img-box">
                <img src="technology.jpg">
            </div>
            <div class="img-button-wrapper">
                 <button type="button" id="btn-click" onclick="toggleImage()">Click</button>
            </div>
        </div>

        <div class="wrapper">
            <p class="top-text">Создать пользователя</p>
        	<div class="subwrapper">
                <div class="input-box">
            		<input id="login" type="text" name="login" autocomplete="off">
            	</div>
            </div>
        	<div class="subwrapper">
        		<input id="pass" type="password" name="pass">
        	</div>
        	<div class="button-wrapper">
        		<button type="button" id="btn" onclick="createUser()">Создать</button>
        	</div>
            <div class="text-wrapper" id="text-wrapper">
                <p id="demo"></p>
            </div>
            <div class="resp-info" id="respInfo">
                <div class="text">Username: <span id="username"></span></div>
                <div class="text">Email: <span id="email"></span></div>
                <div class="text">Password: <span id="password"></span></div>
            </div>
        </div>
       
    	<div class="request-box">
            <span class="request-text">Работа со вкладкой "Local Storage"</span>

    		<div class="button1-box">
                <div>
                    <button class="button1 subclass" onclick="addLocalStorage()">Добавить данные</button>
                </div>
                <div>
                    <button class="button1 subclass" onclick="getLocalStorage()">Показать данные</button>
                </div>
                <div>
                    <button class="button1 subclass" onclick="removeLocalStorage()">Удалить данные</button>
                </div>
            </div>
           
            <p class="request-text subclass1" id="name"><p class="request-text subclass1" id="age"><p class="request-text subclass1" id="role"></p></p></p>
    	</div>

        <div class="request-box">
            <span class="request-text">Генерация ошибки во вкладке "Console"</span>

    		<div>
                <button class="button1 subclass" onclick="generateError()">Показать ошибку</button>
            </div>
    	</div>
    </div>
	

    <script src="script.js"></script>
 </body>
</html>
