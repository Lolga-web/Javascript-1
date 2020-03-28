'use strict';

let image = document.getElementsByClassName('selectColor__carousel__small');

for (let i = 0; i < image.length; i++) {
    image[i].addEventListener('click', function () {

        let dataColor = this.getAttribute('data-color');
        let big = document.getElementById('big');
        let activeColor = document.getElementsByClassName('active');

        activeColor[0].classList.remove('active');
        big.setAttribute('data-color', dataColor);
        this.classList.add('active');
    });
};

function chess() {
		    let table = document.createElement('table');
	        let letters = ['','A','B','C','D','E','F','G','H',''];
	        let black1 = ['8','♜','♞','♝','♛','♚','♝','♞','♜','8'];
	        let black2 = ['7','♟','♟','♟','♟','♟','♟','♟','♟','7'];
	        let white1 = ['1','♖','♘','♗','♕','♔','♗','♘','♖','1'];
	        let white2 = ['2','♙','♙','♙','♙','♙','♙','♙','♙','2'];
		    for (let i = 0, a = 9; i < 10, a >= 0; i++, a--) {
		        let tr = table.insertRow(i);
		        for (let j = 0; j < 10; j++) {
		            let td = tr.insertCell(j);
	                switch (i) {
		                case 0:
		                    td.innerText = letters[j];
		                    break;
		                case 1:
		                    td.innerHTML = black1[j];
		                    break;
		                case 2:
		                    td.innerHTML = black2[j];
		                    break;
		                case 7:
		                    td.innerHTML = white2[j];
		                    break;
		                case 8:
		                    td.innerHTML = white1[j];
		                    break;
		                case 9:
		                    td.innerText = letters[j];
		                    break;
		                default:
		                    if (j === 0 || j === 9) {
		                        td.innerHTML = a;
		                    };
		                    break;
	            	};
		        };
		    };
		    let container = document.querySelector('.chessContainer');
	    	container.insertAdjacentElement("beforeend", table);
		};
		chess();
