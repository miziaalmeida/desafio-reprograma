
var questions = [
{
  prompt: "1. O que significa a sigla HTML?\n (a) Hyperlinks and Text Markup Language\n (b) Hyper Text Markup Language\n\
          (c) Home Tool Markup Language",
  answer: "b"
},

{
  prompt: "2. O que significa a sigla CSS??\n (a) Creative Style Sheets\n (b) Cascading Style Sheets\n (c) Colorful Style Sheets",
  answer: "b"
},

{
  prompt: "3. Dentro de qual elemento HTML nós colocamos o JavaScript?\n (a) script \n (b) js \n (c) JavaScript",
  answer: "a"
}
  ];

var score = 0;

for(var i=0; i < questions.length; i++) {
	  var response = window.prompt (questions[i].prompt);
    if(response == questions[i].answer) {
        score++;
        alert("Correto!");
    } else {
    	     alert("Errado!");
    }
}
alert ("Você acertou" + score + "/" + questions.length);
