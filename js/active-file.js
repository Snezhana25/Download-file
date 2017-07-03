var imageLoader = document.getElementById('file');
    imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function fun1() {
    var rng=document.getElementById('myzoom'); 
    var div=document.getElementById('myCanvas'); 
     div.style.width=rng.value+'px';
}   



