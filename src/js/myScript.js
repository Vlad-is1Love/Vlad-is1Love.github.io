/*Scroll страницы по якорным ссылкам в нужную позицию*/
$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top -59 + "px"});
});


/*Анимация статистики*/
let arg1 = $("#smile h3");
let arg2 = $("#orange_znak h3");
let arg3 = $("#galochka h3");
let arg4 = $("#kubok h3");
let counter_i = 0;

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
			change.target.classList.add('show-animation');
			myLoop(arg1,2,150,0);
			myLoop(arg2,10,20,0);
			myLoop(arg3,1,25,0);
			myLoop(arg4,1,350,0);
		}
	});
}

function myLoop (x,y,z,counter_i) {
   
   setTimeout(function () {
        let a = Number($(x).attr("value"));
        $(x).text(counter_i);
        counter_i+=y;
      
        if (counter_i < a+1) {
        myLoop(x,y,z,counter_i);
        }
    }, z);
}


/*Вывод модального окна при нажатии на картинку*/
$("#carouselExampleIndicators .carousel-item").click(function(){
	let image = $("#carouselExampleIndicators .active img").attr("alt");
	console.log(image);
	$('#exampleModal .modal-body img').attr("src", image);
	$('#exampleModal').modal('show');
});

/*Вывод модального окна через определенное время*/
setTimeout(() => {$('#justModal').modal('show')},5000);