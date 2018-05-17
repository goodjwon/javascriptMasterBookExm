

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
	return this.getBase() * this.getHeight() / 2 ;
}

function Rantalgle(){
	var _rbase;
	var _rHeight;

	this.setRbase = function(rbase){
		_rbase = rbase;
	}
	this.getRbase = function(){
		return _rbase;
	}

	this.setRhight = function(rHeight){
		_rHeight = rHeight;
	}
	this.getRHight = function(){
		return _rHeight = rHeight;
	}
}

Rantalgle.prototype.getArea = function(){
	return this._rbase * this._rHeight;
}


//member filed 입력했지만 값이 셋팅 되지 않는다.
var t = new Traiagle();
t._base =  10;
t._height = 2;
console.log(t.getArea()); //NaN
console.log('')

//set method에 했더니 값이 셋팅 된다.
t.setBase(10);
t.setHeight(2);

console.log(t.getBase());
console.log(t.getHeight());
console.log(t.getArea());


var r = new Rantalgle();
r._rbase = 10;
r._rHeight = 5;
console.log(r._rbase);
console.log(r.getRbase());
console.log(r.getArea()); // 50 what is different between one on the top?
