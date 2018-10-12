var img = document.querySelectorAll('img')
for(var i = 0; i<img.length; i++){
    img[i].addEventListener('click',changeImage);
}

function changeImage(){
    var srce = this.getAttribute('src');
    img[0].src= srce;
}
