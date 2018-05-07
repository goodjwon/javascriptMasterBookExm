

function getTriangle(base, height) {
	return base * height / 2;
}

console.log("삼각형의 면적은: "+getTriangle(5, 2));


var getTriangle2 = function(base, height){
	return base * height /2;
};

console.log("삼각형2의 면적은: "+getTriangle2(10,20));

let getTriangle3 = (base, height) => {
	return base * height /2;
};

console.log("삼각형3의 면적은: "+getTriangle3 (20, 50));



function printf(format){

	for(var i =0, len = arguments.length; i < len; i ++){
		var patten = new RegExp ('\\{' + (i-1) + '\\}', 'g');
		format = format.replace(patten, arguments[i]);
	}
	console.log(format);
};

printf('안녕하세요 {0}씨 나는 {1} 입니다.','시온', '피카추');







function getTriangleArgs(args) {
	if(args.base === undefined ) {args.base = 1;}	
	if(args.height === undefined ) {height = 1;}
	return args.base * args.height / 2
};


console.log("삼각형의 면적은 args : "+getTriangleArgs({base:5, height:10}));


function getTriangelArgs2(base = 1, height =1) {
	return base * height /2;
}

console.log("삼각형의 면적은 arg2 "+getTriangelArgs2(5));


function multi(a = 1, b = 5){
	return a * b;
}
console.log(multi()); 



function sum (...nums){
	let result = 0;
	for(let num of nums){
		if(typeof num !== 'number') {
			throw new Error ('value is not number');
		}
		result += num;
	}
	return result;
}

try{
	console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
} catch(e) {
	window.alert(e.message);
}

console.log(Math.max(15,10,-5,78));

console.log(Math.max.apply(null, [1, 2, 3, 78]));

console.log(Math.max(...[1, 2, 3, 77]));



function show(x, y = 1) {
	console.log('x = ' + x);
	console.log('y = ' +y);

}

show();


function required() {
	throw new Error('인수가 부족합니다.');
}

function hoge(value = required()) {
	return value;
}

console.log('hoge is '+hoge(10));