const  display = document.getElementById('display')
function addToDisplay(input) {
 display.value += input;
}
function clearDisplay() {
display.value = ''
}
function calculate() {
try{
  display.value += eval(display.value)
}catch(e) {
 display.value = 'ERROR'
}
}




































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










