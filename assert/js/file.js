document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById("file").addEventListener('change', function(e){
        var inputs = document.getElementById("file").files;
        for(var i = 0, len = inputs.length; i< len; i++){
            var input = inputs[i];
            console.log(input.name);
            console.log(input.type);
            console.log(input.size / 1024 + 'KB');
            console.log(input.lastModifiedDate);
        }
    }, true);
    
}, false);