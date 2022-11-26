let kancha_plusov = document.querySelector('.kancha_plusov');
let kancha_dislakov = document.querySelector('.kancha_dislakov')
let like = 0;
let dis = 0;
let down = document.querySelector('.down')
let up = document.querySelector('.up')

up.onclick = function lk () {
    like++
    kancha_plusov.innerHTML = like;
};
down.onclick = function di (){
    dis++
    kancha_dislakov.innerHTML = dis
}