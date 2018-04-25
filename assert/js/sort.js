var classes = ['부장', '과장', '주임', '담당'];
var members = [
	{name:'남상미',clazz:'주임'},
	{name:'김준수',clazz:'부장'},
	{name:'정인식',clazz:'과장'},
	{name:'남궁민',clazz:'담당'},
	{name:'남상미',clazz:'담당'}
];



console.log(members.sort(function(x,y){
	return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));



var ary = [5, 25, 10];
console.log(ary.sort());
console.log(ary.sort(function(x, y){
	return y - x ;
}));

