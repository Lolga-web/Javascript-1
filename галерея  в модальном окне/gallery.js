
/**
 * функция генерирует галерею
 */
function addPanel() {
    const gallery = document.querySelector('#gallery'); //вся галерея
    const mainImage = document.createElement('div'); //большая картинка
    const panelItems = document.createElement('div'); //вся панель с миниатюрами
    const panel = document.createElement('div'); //первая обертка для миниатюр
    const bar = document.createElement('div'); //вторая обертка для миниатюр
    const arrLeft = document.createElement('button'); //кнопка влево
    const arrRight = document.createElement('button'); //кнопка вправо


    mainImage.classList.add('main-image'); //добавляем блоку большой картинки класс main-image
    panelItems.classList.add('panel-items'); //добавляем блоку всей панели с миниатюрами класс panel-items
    panel.classList.add('panel'); //добавляем блоку первой обертки класс panel
    bar.classList.add('bar'); //добавляем блоку второй обертки класс bar

    arrLeft.classList.add('array', 'array-left'); //добавляем классы кнопке влево
    arrRight.classList.add('array', 'array-right'); //добавляем классы кнопке вправо


    gallery.append(mainImage); //вставляем mainImage в блок gallery
    gallery.append(panelItems); //вставляем panelItems в блок gallery
    panelItems.append(arrLeft); //вставляем arrLeft в блок panelItems
    panelItems.append(panel); //вставляем panel в блок panelItems
    panelItems.append(arrRight); //вставляем arrRight в блок panelItems
    panel.append(bar); //вставляем bar в блок panel

    imageList.forEach(function(item) {
        addImages(item);
    });

    changeImages();
    scrollImages(arrLeft, arrRight)
};

/**
 * функция добавляет картинки в галерею
 */
function addImages(imgItem) {
    const bar = document.querySelector('.bar'); //получаем блок с классом bar и записываем в переменную bar
    const imageBlock = document.createElement('div'); //создаем блоки с картинками и записываем в переменную imageBlock
    const imageSmall = document.createElement('img'); //создаем теги img и записываем в переменную image

    imageBlock.classList.add('square'); //добавляем блокам с картинками класс square
    imageSmall.classList.add('panel-image'); //добавляем картинкам класс panel-image

    bar.append(imageBlock); //добавляем блоки с картинками во вторую обертку
    imageBlock.append(imageSmall); //добавляем картинки в блоки с картинками

    imageSmall.setAttribute('src', imgItem); //добавляем картинкам адрес из массива

    if (imgItem == imageList[0]) {
        const bigBlock = document.querySelector('.main-image');
        const imageBig = document.createElement('img'); //создаем тег img и записывем в переменную imageBig
        bigBlock.append(imageBig); //добавляем картинку в блок большой картинки
        imageBig.setAttribute('src', imgItem);
        imageBig.setAttribute('id', 'big-img');
        imageBlock.classList.add('active');
    };
};

/**
 * функция меняет большую картинку при клике на маленькую
 */
function changeImages() {
    let image = document.getElementsByClassName('panel-image');
    for (let i = 0; i < image.length; i++) {
        image[i].addEventListener('click', function () {

            let src = this.getAttribute('src');
            let pic = document.getElementById('big-img');
            let act_img = document.getElementsByClassName('active');

            act_img[0].classList.remove('active');
            pic.setAttribute('src', src);
            this.classList.add('active');
        });
    };
};

/**
 * функция прокрутки изображений
 */
function scrollImages(arrLeft, arrRight) {
    let barScroll = document.querySelector('.bar');
    barScroll.style.marginLeft = '0px';
    let marginVar = 0;

    arrLeft.addEventListener('click', function () {
          if (parseInt(barScroll.style.marginLeft) < 0) {
              marginVar  += 150;
              barScroll.style.marginLeft = 0 + marginVar + 'px';
        };
    });

    arrRight.addEventListener('click', function () {
          if (parseInt(barScroll.style.marginLeft) > -1050) {
              marginVar  -= 150;
              barScroll.style.marginLeft = 0 + marginVar + 'px';
          };
    });
};

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

addPanel();

