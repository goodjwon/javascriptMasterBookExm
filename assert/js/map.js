let m = new Map();
m.set('dog','멍멍멍');
m.set('cat', '야옹');
m.set('mouse', '찍찍');

console.log(m.size);
console.log(m.get('dog'));
console.log(m.get('cat'));

for(let key of m.keys()){
	console.log(key);
}

for(let value of m.values()){
	console.log(value);
}

for(let[key, value] of m){
	console.log(m);
}

m.delete('dog');
console.log(m.size);

m.clear();
console.log(m.size);


var arry = {};
var m = new Map();
m.set(arry, 'hoge');

console.log(m.get(arry));


