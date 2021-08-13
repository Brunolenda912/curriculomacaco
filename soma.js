var num1 = document.getElementById("num1");

var num2 = document.getElementById("num2");

var botao = document.getElementById("botao");

botao.addEventListener("click",function(){
    alert("O macaco diz : A sua soma é " + (parseInt(num1.value)+parseInt(num2.value)))
})
