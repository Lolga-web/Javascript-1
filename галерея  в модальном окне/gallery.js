'use strict';

let imageList = ['images/1.jpg',
                 'images/2.jpg',
                 'images/3.jpg',
                 'images/4.jpg',
                 'images/5.jpg',
                 'images/6.jpg',
                 'images/7.jpg',
                 'images/8.jpg',
                 'images/9.jpg',
                 'images/10.jpg',];

const gallery = document.querySelector('#gallery');
const mainImage = document.createElement('div');
const panelItems = document.createElement('div');
const panel = document.createElement('div');
const bar = document.createElement('div');
const arrLeft = document.createElement('button');
const arrRight = document.createElement('button');

mainImage.classList.add('main-image');
panelItems.classList.add('panel-items');
panel.classList.add('panel');
bar.classList.add('bar');

arrLeft.classList.add('array', 'array-left');
arrRight.classList.add('array', 'array-right');

gallery.append(mainImage);
gallery.append(panelItems);
panelItems.append(arrLeft);
panelItems.append(panel);
panelItems.append(arrRight);
panel.append(bar);

imageList.forEach(function(item) {
    if (item == imageList[0]) {
        addBigImage(item);
    };
    addSmallImages(item);
});

function addBigImage(item) {
    const bigImage = document.createElement('img');
    mainImage.append(bigImage);
    bigImage.setAttribute('src', item);
    bigImage.setAttribute('id', 'big-img');
};

function addSmallImages(item) {
    const imageBlock = document.createElement('div');
    const smallImage = document.createElement('img');
    imageBlock.classList.add('square');
    smallImage.classList.add('panel-image');
    bar.append(imageBlock);
    imageBlock.append(smallImage);
    smallImage.setAttribute('src', item);
};

let image = document.getElementsByClassName('panel-image');
for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', changeImages)
};

function changeImages() {
    let src = this.getAttribute('src');
    let bigImage = document.getElementById('big-img');
    bigImage.setAttribute('src', src);
};

bar.style.marginLeft = '0px';
let marginLeft = 0;

arrLeft.addEventListener('click', function () {
    if (parseInt(bar.style.marginLeft) < 0) {
        marginLeft  += 150;
        bar.style.marginLeft = 0 + marginLeft + 'px';
    };
});

arrRight.addEventListener('click', function () {
    if (parseInt(bar.style.marginLeft) > -(imageList.length * 150 - 450)) { // изменила вот здесь
        marginLeft  -= 150;
        bar.style.marginLeft = 0 + marginLeft + 'px';
    };
});

