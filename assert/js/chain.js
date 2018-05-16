var Animal = function(){};	//선언


Animal.prototype = {		//정의
	walk : function(){
		console.log('종종...');
	}
};


var SuperAnimal = function(){};	//선언


SuperAnimal.prototype = {		// walk 정의
	walk : function(){
		console.log('다다다닷!!');
	}
}


var Dog = function(){			//선언 Animal 상속.
	Animal.call(this);
}

Dog.prototype = new Animal();	//생성 

 Dog.prototype.bark = function(){	//bark method 정의
 	console.log('멍멍!!');
 }

var d = new Dog();				
d.walk();
//d.bark();

Dog.prototype = new SuperAnimal();
var d2 = new Dog();
d2.walk();
d.walk();
