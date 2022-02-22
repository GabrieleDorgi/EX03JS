var media=0, nota
for(var a=1; a<=4;a++){
    nota=parseFloat(prompt("nota do aluno:"))
    media=media+nota
}
media=media/4
if(media<=10&& media>=9){
    alert("nota A! parabéns!")
}
else if(media <=8.9 && media>=8){
    alert("nota B! parabéns!")
}
else if(media <=7.9 && media>=7){
    alert("nota C! está na média")
}
else if(media <=6.9 && media>=0){
    alert("nota D, precisa melhorar")
}
else{
    alert("erro, valor incorreto informado")
}