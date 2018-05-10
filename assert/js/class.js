

var Member = function (firstName, lastName) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function () {
        return this.firstName + '   ' + this.lastName;
    }


};

var mem = new Member('철수', '강');


console.log(mem.getName());


var data = 'Global data';
var obj1 = {data : 'obj1data'};
var obj2 = {data : 'obj2data'};

function hoge() {
    console.log(this.data);
}

hoge.call(null); //인자값이 안넘오 오면 글로벌
hoge.call(obj1); //인자값이 obj1으로 넘어 오면 obj1
hoge.call(obj2); //인자값이 obj2으로 넘어 오면 obj2




function hogeA() {
    //var args = Array.prototype.slice.call(arguments);
    let args = Array.from(arguments); //단순화.
    console.log(args.join('/'));

}

hogeA('Angulra', 'React', 'Backbone');