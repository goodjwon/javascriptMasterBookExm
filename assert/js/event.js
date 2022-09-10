document.addEventListener('DOMContentLoaded', function(e){
    console.log(e);
    document.getElementById('btn').addEventListener('click', function(ea){
        console.log(ea);
        window.alert('버튼이눌려졌다.');
    }, false);
}, false);

document.addEventListener('DOMContentLoaded', (event)=>{
    console.log(event);
    document.getElementById('btn').addEventListener('click', (ea)=>{
        console.log(ea);
        window.alert('버튼이눌려졌다.');
    });
})