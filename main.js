var boje = document.getElementsByClassName('boje');
boje[0].style.background = 'red';
boje[1].style.background = 'gray';
boje[2].style.background = 'gray';

function changeToYellow() {
  boje[1].style.background = 'Yellow';
}
function changeToGreen(){
    boje[0].style.background = 'gray';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'green';
}
var x = setTimeout(changeToYellow,3000);
var y = setTimeout(changeToGreen,5000);
