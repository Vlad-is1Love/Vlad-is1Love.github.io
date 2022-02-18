/*ОБразование кружочка)))*/
var alpha = 0;
var R_str = $("#bigKrug").css("height");

let R = "";
for(let char of R_str){
  if (char != "p"){
    R += char;
  }
  else{break;}
}

R = Number(R) / 2;

var x,y;

for (let i = 0; i < 6; i++) {
  x = R * Math.cos(alpha);
  y = R * Math.sin(alpha);

  $(".oblast button").eq(i).css({"top": y + "px", "left": x + "px"});

  alpha -= Math.PI / 3;
}


/*Вращение кружочка*/
$(".smileText").css("display", "flex");

var povorot = 0;
var tracker = 0;

$("#next").click(function(){
  povorot += 60;
  $(".oblast").css({"transform": "rotate(" + povorot +"deg)",
    "transition": "transform, 0.5s"});
  $(".oblast button").css({"transform": "rotate(" + -povorot +"deg)",
    "transition": "transform, 0.5s"});

  tracker += 1;
  $("." + `${$(".oblast button").eq(tracker - 1).attr("class")}` + "Text").css("display", "none");
  if (tracker > 5){tracker = 0};
  $("." + `${$(".oblast button").eq(tracker).attr("class")}` + "Text").css("display", "flex");
});

$("#previous").click(function(){
  povorot -= 60;
  $(".oblast").css({"transform": "rotate(" + povorot +"deg)",
  "transition": "transform, 0.5s"});
  $(".oblast button").css({"transform": "rotate(" + -povorot +"deg)",
  "transition": "transform, 0.5s"});

  tracker -= 1;
  $("." + `${$(".oblast button").eq(tracker + 1).attr("class")}` + "Text").css("display", "none");
  if (tracker < 0){tracker = 5};
  $("." + `${$(".oblast button").eq(tracker).attr("class")}` + "Text").css("display", "flex");
});

















/*Прямоугольники с текстом к кружочку*/
$(".Text").css({
  "height": R * 2 + "px",});

/*Прокручивает кружочек по истечению конкретного времени*/
/*setInterval(function(){
  povorot += 60;
  $(".oblast").css({"transform": "rotate(" + povorot +"deg)",
    "transition": "transform, 0.5s"});
  $(".oblast button").css({"transform": "rotate(" + -povorot +"deg)",
    "transition": "transform, 0.5s"});

  tracker += 1;
  $("." + `${$(".oblast button").eq(tracker - 1).attr("class")}` + "Text").css("display", "none");
  if (tracker > 5){tracker = 0};
  $("." + `${$(".oblast button").eq(tracker).attr("class")}` + "Text").css("display", "flex");
},12000);*/