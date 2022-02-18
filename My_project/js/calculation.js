/*Расчет итоговой стоимости*/
var totalCost;

/*Расчет итоговых сроков*/
var deadlinesD;
var part1;


function convert(){
	totalCost = Number($("#site_type option:selected").attr("valCost")) + 
		Number($("#design option:selected").attr("valCost")) + 
		Number($("#Adaptability option:selected").attr("valCost"));

	if (isNaN(totalCost)) {totalCost = "0"};
}

function time(){
	deadlinesD = Number($("#site_type option:selected").attr("valDay")) * 
		(Number($("#design option:selected").attr("valK1")) + 
		Number($("#Adaptability option:selected").attr("valK2")));
	
	if (deadlinesD > 4 && deadlinesD < 21) {part1 = "дней"}
	else if (deadlinesD % 10 == 2 || deadlinesD % 10 == 3 || deadlinesD % 10 == 4){
		part1 = "дня"}
	else if (deadlinesD % 10 > 4 || deadlinesD % 10 == 0){part1 = "дней"}
	else {part1 = "день"};

	if (isNaN(deadlinesD)) {
		deadlinesD = 0;
		part1 = "дней";
	}
}


$("#site_type").change(function(){
	convert();
	$("#sumItog").text(totalCost + " руб.");
	time();
	$("#dateItog").text(deadlinesD + " " + part1);
});

$("#design").change(function(){
	convert();
	$("#sumItog").text(totalCost + " руб.");
	time();
	$("#dateItog").text(deadlinesD + " " + part1);
});

$("#Adaptability").change(function(){
	convert();
	$("#sumItog").text(totalCost + " руб.");
	time();
	$("#dateItog").text(deadlinesD + " " + part1);
});
