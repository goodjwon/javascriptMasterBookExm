

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