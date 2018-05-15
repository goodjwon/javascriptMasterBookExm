var Animal = function(){};


Animal.prototype = {
	walk : function(){
		console.log('종종...');
	}
};

var Dog = function(){
	Animal.call(this);
}

Dog.prototype = new Animal();
Dog.prototype.bark = function(){
	console.log('멍멍!!');
}


var d = new Dog();
d.walk();
d.bark();