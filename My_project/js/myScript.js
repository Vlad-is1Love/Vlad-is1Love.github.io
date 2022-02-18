/*Scroll страницы по якорным ссылкам в нужную позицию*/
$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top -59 + "px"});
});

/*Scroll страницы по якорным ссылкам в нужную позицию*/
$("#logo").click(function(){
	$('html, body').animate({scrollTop: 0 + "px"});
});


/*Анимация статистики*/
let arg1 = $("#smile h3");
let arg2 = $("#orange_znak h3");
let arg3 = $("#galochka h3");
let arg4 = $("#kubok h3");
let counter_i = 0;
let check = false;

$(document).ready(function(){

	let options = {threshold: [1]};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.element-animation');
		elements.each((i,el) => {
			
				observer.observe(el);				
			
		});
});

function onEntry (entry){
	entry.forEach(change => {
		if (change.isIntersecting){
			if (check == false){
			change.target.classList.add('show-animation');
			myLoop(arg1,2,150,0);
			myLoop(arg2,10,20,0);
			myLoop(arg3,1,25,0);
			myLoop(arg4,1,350,0);
		};
		check = true;
		}
	});
}

function myLoop (x,y,z,counter_i) {
   
   setTimeout(function () {
        let a = Number($(x).attr("znach"));
        $(x).text(counter_i);
        counter_i+=y;
      
        if (counter_i < a+1) {
        myLoop(x,y,z,counter_i);
        }
    }, z);
}



/*Вывод модального окна при нажатии на картинку в каруселе картинок*/
$("#carouselExampleIndicators .carousel-item").click(function(){
	let image = $("#carouselExampleIndicators .active img").attr("alt");
	console.log(image);
	$('#exampleModal .modal-body img').attr("src", image);
	$('#exampleModal').modal('show');
});

/*Вывод модального окна по нажатию на кнопку "Написать мне"*/
$(document).ready(function(){
	$('#Write_to_me').click(function(){
		$('#justModal').modal('show');
	});
});

$(document).ready(function(){
	$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
	$('input[name="user_tel"]').click(function(){
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
});

/**/

function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); // Ебанный internet explorer 11
    	console.log(json);
        
    	// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
    	if (json.result == "success") {
    		// Если сообщение отправлено
    		alert("Сообщение отправлено");
    	} else {
    		// Если произошла ошибка
    		alert("Ошибка. Сообщение не отправлено");
    	}
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}