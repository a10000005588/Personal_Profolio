	
$(document).ready(function() {
    $('#home_title_h1').addClass('animated flipInX');
     
    $("#RandomQuote").click(function(){
    	document.location.href="./RandomQuote/random.html";
    });
<<<<<<< HEAD
});


=======

    $("#Cal").click(function(){
    	document.location.href="./Calculator/calculator.html";
    });
});


$(window).load(function(){
    $('#loading').hide(1000);
});

>>>>>>> gh-pages
var d = {
	a:123,
	b:"test"
};

var arr = [9,2,2,2,2];

arr.forEach(function(val, i){
	console.log('arr[' + i + '] = ' + val);
});

for(var index in arr){
	console.log('arr[' + index + '] = ' + arr[index]);
}

var myModule = (function () {
	var a = 10;
	var b = 20;

	var sumFunc = function(){
		a += b;
		return a;
	}
    //myModule只存在這一段
	return {
		sum: sumFunc
	}

})();  //這兩個小括號 表示把之前先立即執行掉

var result = myModule.sum();
console.log("The first result is " +result);//30
var result = myModule.sum();
console.log("The second result is "+result);//50


console.log(d.a);

var f1 = function (callback) {
    setTimeout(callback, 5000);
}; 

var f2 = function (callback) {
    setTimeout(callback, 1000);
}; 

f1( function () {
    console.log('f1 callback');
});

f2( function () {
    console.log('f2 callback');
});