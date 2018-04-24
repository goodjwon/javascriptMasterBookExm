
var x = 100;
var y = x++;
var data = { apple:100, orange:200, banana:300}; 	//map
var data2 = ['apple', 'orange', 'banana'];			//array


console.log(x);
console.log(y);
console.log(typeof data);
console.log(typeof data2);

console.log("========for in data======");
for(var key in data){
	console.log(key)
}


console.log("========for of array use value======");
for(var value of data2){
	console.log(value);
}

console.log("========for in array use key======");
for(var key in data2){

	console.log(data2[key]);
}


var result = 0;

for(var i = 1; i <= 100; i ++){
	//result = i + i; // result = +i; //
	result += i ; // result = result + i//
	console.log(i);
		if (result > 1000 ) {
			break;}
}
console.log("합계가 1000이 넘은 i 값은? "+i);