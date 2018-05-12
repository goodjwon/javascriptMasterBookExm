/**
 * 생성자가 함수로 호출 되는 것을 차단.
 * @param firstName
 * @param lastName
 * @returns {Member}
 * @constructor
 */
var Member = function(firstName, lastName){

    if(!(this instanceof Member)){
        return new Member(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
};


var m = Member('인사', '정');
console.log(m);
console.log(m.firstName);