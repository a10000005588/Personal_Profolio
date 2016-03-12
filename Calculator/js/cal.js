// How to build a simple sh*t calculator
// 1.Creating an string or array to store the input value
//   and show one the screen

// 2.according to the string, it is necessary to define the piroity 
// of the operator: "%","=","/" > "+","-"
// using a function to decide the piroity and separate the string into pieces

// 3.AC: clear all the input data ()
//   BC: delete a word in a string or array(using slice(0,-1))
//   %:  id=par  ex: 6%4=2  5%2=1
//   ans: show the answer

var input = "";

$(document).ready(function() {
    $("#1").click(function(){
        input += "1";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#2").click(function(){
        input += "2";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#3").click(function(){
        input += "3";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#4").click(function(){
        input += "4";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

        $("#5").click(function(){
        input += "5";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#6").click(function(){
        input += "6";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#7").click(function(){
        input += "7";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#8").click(function(){
        input += "8";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#9").click(function(){
        input += "9";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#0").click(function(){
        input += "0";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#par").click(function(){
        input += "%";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#div").click(function(){
        input += "/";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#mul").click(function(){
        input += "*";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#add").click(function(){
        input += "+";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#del").click(function(){
        input += "-";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#dot").click(function(){
        input += ".";
        $("#textbox").empty();
        $("#textbox").append(input);
    });

    $("#AC").click(function(){
        input ="";
        $("#textbox").empty();
    });

    $("#CE").click(function(){
    	input = input.slice(0,-1);
    	$("#textbox").empty();
    	$("#textbox").append(input);
    });

    $("#equal").click(function(){
    	var result = calculate(input);
    	$("#textbox").empty();
    	$("#textbox").append(result);
    });
});

function calculate(input){
	//first using split divide + - and then split / * % 
    //123+55*6
    //what the fu*k 
    //with the eval() fucntion you don`t need to write calculating process in person!!
    var result = eval(input); 	
    return result;

}