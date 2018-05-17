

function Traiagle(){
	var _base;
	var _height;

	var _checkAgrs = function(val){
		return (typeof val === 'number' && val > 0);
	};

	this.setBase = function(base){
		if(_checkAgrs(base)){_base = base};
	}
	this.getBase = function() {return _base;}


	this.setHeight = function(height){
		if(_checkAgrs(height)){_height = height};
	}
	this.getHeight = function() {return _height;}
};


Traiagle.prototype.getArea = function(){
	return this.getBase() * this.getHeight();
}




var t = new Traiagle();
t._base =  10;
t._height = 2;
console.log(t.getArea());


t.setBase(10);
t.setHeight(2);

console.log(t.getBase());
console.log(t.getHeight());
console.log(t.getArea());
