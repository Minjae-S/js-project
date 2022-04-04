
const indicator = document.querySelectorAll('.indicator button');
const lightbox = document.querySelector('#lightbox');
const block = document.querySelector('#block'); 

//lightbox 

function lightbox_open(num){
    lightbox.setAttribute('class','active');
    block.setAttribute('class','active');

    change_img(num);
    indicator[num-1].focus();
}

function lightbox_close() {
    lightbox.removeAttribute('class');
    block.removeAttribute('class');
}

function change_img(val){
    const imgs = document.querySelectorAll('figure>img');

    for (var i =0; i<imgs.length; i++) {
        imgs[i].removeAttribute('class');
    }
    console.log(val);
    imgs[val-1].setAttribute('class','active');
}