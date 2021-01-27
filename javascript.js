
// №2 На JavaScript
// Добавить к таблице форму с кнопкой. Перед нажатием на кнопку пользователь выбирает любой цвет и номер одной ячейки из таблицы,
// по умолчанию это ячейка один и красный цвет.
// Выбранная ячейка закрашивается в белый цвет, остальные в цвет, который выбрал пользователь.
// Таблица перекрашивается каждый раз, при выборе новой ячейки, цвета, и нажатия на кнопку.

let colorForm = document.querySelector('.change-color');
let numberForm = document.querySelector('.get-number');
let buttonForm = document.querySelector('.button-form');
let cell = document.querySelectorAll(".cell");

function changeTableColor(event){
    event.preventDefault();
    cell.forEach(i => {
        i.style.background = colorForm.value;
        if(numberForm.value == i.dataset.indexNumber){
            i.style.background = 'white';
        }
    })
}
buttonForm.addEventListener('click', changeTableColor);
