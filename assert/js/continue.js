let continue_result = 0;

for (var i=1; i< 100; i++){
	if(i % 2 === 0) { continue; }
	continue_result += i;
}
console.log("합계 : "+continue_result);


