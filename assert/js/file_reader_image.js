
window.addEventListener('DOMContentLoaded', function(){
    document.getElementById('file').addEventListener('change',function(e){
        
        var input = document.getElementById('file').files[0];
        var reader = new FileReader();
        
        reader.addEventListener('load', function(){
            document.getElementById("result").src = reader.result;
        }, true);

        reader.addEventListener('error', function(){
            console.log(reader.error.message);
        }, true);
        
        reader.readAsDataURL(input);

        /** file info..
         * .input.lastModified
         * lastModified : 1494201460281
         * lastModifiedDate : Mon May 08 2017 08:57:40 GMT+0900 (대한민국 표준시)
         * __proto__ : Object
         * name : "61986.jpg"
         * size  :43446
         * type : "image/jpeg"
        */

    }, true);
});