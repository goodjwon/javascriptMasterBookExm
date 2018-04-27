let pet0 = {
	type : '고양이',
	name : '야옹이',
	description : {
		birth : '2014-02-15'
	}
};


let pet1 = {
	type : '개',
	name : '멍멍이',
	description : {
		birth : '2015-10-31'
	}
};

let pet2 = {
	weight : 42,
	photo : 'http://www.msn.co.kr/'
};


Object.assign(pet0, pet1, pet2);

console.log(pet0);

let obj = {x:1, y:2, z:3};
let obj2 = new Object();
obj2.x = 1;
obj2.y = 2; 
obj2.z = 3;


console.log(obj);

console.log(obj2);








