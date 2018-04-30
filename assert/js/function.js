

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