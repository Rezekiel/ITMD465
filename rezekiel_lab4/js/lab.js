document.getElementById("sec1-btn1").onclick = getInputValue
function getInputValue() {
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("sec1-input").value;
    if (inputVal != "") {// Displaying the value
        alert(inputVal);
    }
    else {
        alert("You did not Enter anything");
    }
}

document.getElementById("sec2-btn1").onclick = changeIt
function changeIt() {
    var change =

        //change h3 from original text to name
        document.getElementById("sec2-contentarea").querySelectorAll("h3");
    change[0].innerHTML = 'Raymond Ezekiel';

    //change green box style to grey, #888888, box; 100% wide; 20px tall.
    document.getElementById("sec2-box").style.backgroundColor = ("#888888");
    document.getElementById("sec2-box").style.width = ("100%");
    document.getElementById("sec2-box").style.height = ("20px");

    //change paragrpagh style: bold, italic, 12px
    var font = document.getElementById("sec2-contentarea").querySelectorAll("p");
    font[0].style.font = "italic bold 12px sans, serif";
    // font[0].style.fontWeight  = "bold";
    // font[0].style.fontSize = "12px"

    //change image
    document.getElementById("sec2-contentarea").querySelector('img').src = "img/hamburger_color_icon.png";

    //change link, color, and text
    document.getElementById("sec2-contentarea").querySelector('a').style.color = "#cc0000";
    document.getElementById("sec2-contentarea").querySelector('a').textContent = "Illinois Tech Website";
    document.getElementById("sec2-contentarea").querySelector('a').href = "http://www.iit.edu";
}



document.getElementById("sec3-btn1").onclick = calc;
function calc(){
    //register the user input for formula
    var fdegree = parseFloat(document.getElementById("sec3-input").value);

    // if (fdegree != ""){
    //     alert("No value has been entered!")
    //     return;
    // }
    // else if (fdegree != ){
    //     alert("A non-numeric value was entered!")
    //     return;
    // }
    //variable for the formula
    var convert = fdegree * 1.8 + 32
    document.getElementById("sec3-contentarea").innerHTML =fdegree + " degrees Celsius is equal to" + convert + " degrees Fahrenheit";

}
document.getElementById("sec3-btn2").onclick = clear;
//button calls clear function to clear the innerhtml value
 function clear(){
    document.getElementById("sec3-contentarea").innerHTML='';
 }
 