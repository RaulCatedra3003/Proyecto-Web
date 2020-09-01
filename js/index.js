let indice = 1;
slideShow(indice);

function slideGo(n) {
    slideShow(indice += n);
} 

function slidePosition(n) {
    slideShow(indice = n);
}
setInterval(function tiempo(){
    slideShow(indice+=1)
},4000);
function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName('mySlider');
    let bars = document.getElementsByClassName('bar');
    if (n > slides.length){
        indice = 1;
    }
    if (n < 1){
        indice = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < bars.length; i++){
        bars[i].className = bars[i].className.replace (" active1", "");
    }
    slides[indice-1].style.display = 'block';
    bars[indice-1].className += ' active1';
}