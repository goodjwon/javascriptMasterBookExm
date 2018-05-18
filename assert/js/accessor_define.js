
function Triagle(){
    var _base;
    var _height;

    Object.defineProperty(
        this,
        'base',
        {
            get : function(){
                return _base;
            },
            set : function(base){
                if(typeof base === 'number' && base > 0){
                return _base;
                }
            }
        }
        
    );

    Object.defineProperty(
        this,
        'height',
        {
            get : function(){
                return _height;
            },
            set : function(height){
                if(typeof height === 'number' && height > 0){
                return _height;
                }
            }
        }
        
    );
};



Triagle.prototype.getArea = function(){
    return this.base * this.height / 2;
};




var t = new Triagle();
t.base = 10;
t.height = 5;
console.log(getArea());
