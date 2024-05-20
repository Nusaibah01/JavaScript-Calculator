// // const display = document.getElementById('output');
// // const button = document.querySelectorAll(".calculator input[type='button']")
// // const discard =document.getElementById('discard')


// buttons.forEach(button => {
//     if (button.value === "=") {
//         calculate();
//     }else if (button.value === "CE") {
//         clearDisplay();
//     } else {
//         addToDisplay(button.value);
//     }
// });
// function add() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     document.getElementById("result").value = (num1 + num2).toFixed(2);
// }

// function subtract() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     document.getElementById("result").value = (num1 - num2).toFixed(2);
// }

// function multiply() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     document.getElementById("result").value = (num1 * num2).toFixed(2);
// }

// function divide() {
//     let num1 = parseFloat(document.getElementById("num1").value);
//     let num2 = parseFloat(document.getElementById("num2").value);
//     if (num2 !== 0) {
//         document.getElementById("result").value = (num1 / num2).toFixed(2);
//     } else {
//         alert("Error: Division by zero!");
    
//
(function(){
  
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    //retrieve data from numbers that are clicked
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
      })
    });
    
    equal.addEventListener('click', function(e){
      if(screen.value === ''){
        screen.value = 'Please Enter a Value';
      } else {
        let answer = eval(screen.value);
        screen.value = answer;
      }
    })
    
    clear.addEventListener('click', function(e){
      screen.value = '';
    })
   
  })(); 





































//  // Function that display value 
//  function display(value) { 
//     document.getElementById("ouput").value += val 
// } 

// function myFunction(event) { 
//     if (event.key == '0' || event.key == '1' 
//         || event.key == '2' || event.key == '3' 
//         || event.key == '4' || event.key == '5' 
//         || event.key == '6' || event.key == '7' 
//         || event.key == '8' || event.key == '9' 
//         || event.key == '+' || event.key == '-' 
//         || event.key == '*' || event.key == '/') 
//         document.getElementById("output").value += event.key; 
// } 

// var cal = document.getElementById("output"); 
// cal.onkeyup = function (event) { 
//     if (event.keyCode === 13) { 
//         console.log("Enter"); 
//         let x = document.getElementById("output").value 
//         console.log(x); 
//         solve(); 
//     } 
// } 

// // Function that evaluates the digit and return result 
// function solve() { 
//     let x = document.getElementById("output").value 
//     let y = math.evaluate(x) 
//     document.getElementById("output").value = y 
// } 

// // Function that clear the display 
// function clr() { 
//     document.getElementById("output").value = "" 








// // let dataEntry = document.querySelector('[data-entry]')
// // function display (value) {
// // dataEntry.value += value
// // }
// // let dataoperator = document.querySelector('[data-operator]')
// // function 

// // const name = document.querySelector()
// // object.onclick = function() {7};
// object.addEventListner("click", 7);










