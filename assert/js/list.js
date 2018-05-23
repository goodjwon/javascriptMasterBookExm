document.addEventListener('DOMContentLoaded', function(){
    
    //function setList
    var setListValue = function(name, value){
        var opts = document.getElementById(name);


        for(var i = 0, len = opts.length; i < len ;i++){
            var opt = opts.item(i);

            if(value.indexOf(opt.value) > -1){
                opt.selected = true;
            }
        }

    };

    //function get selectedList
    var getSelectValue = function(name){
        var result= [];
        var opts = document.getElementById(name);

        for(var i = 0, len = opts.length; i < len ;i++){
            var opt = opts.item(i);

            if(opt.selected){
                result.push(opt.value);
            }
        }
        return result;
    };

    //run setList
    setListValue('food', ['abc','hig']);

    //run selectedList
    document.getElementById('btn').addEventListener('click', function() {
        window.alert(getSelectValue('food'));
    }, false);
    
}, false);