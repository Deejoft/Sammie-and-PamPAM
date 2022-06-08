function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";  
    } else {
      x.className = "topnav";
    }
}


var digitfield1 = document.getElementById('DigitField1');
var digitfield2 = document.getElementById('DigitField2');
var result = document.getElementById('Resultfield');
var form =  document.getElementById('XPERCENTY');


form.addEventListener ('submit', function(event) {
  if(!digitfield1.value || !digitfield2.value ){
    alert('Please enter a digit in the box');
  }else{
    var x = parseFloat(digitfield1.value);
    var y = parseFloat(digitfield2.value);
    


    var result = x/y;
    var answer = result * 100;
    
    Resultfield.innerText = answer  + '%';
    event.preventDefault();
  }
})