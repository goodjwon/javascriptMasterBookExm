


document.addEventListener('DOMContentLoaded', function(){
    var data = {
        title: 'java book',
        price : 26000,
        handleEvent: function(){
            console.log(this.title +" / "+ this.price + "won");

        }
    };

    document.getElementById('btn').addEventListener(
        'click', data, false);
    
}, false);