const drop1 = document.querySelector('.use');
const low = document.querySelector('.use-menu-low');
const drop = document.querySelectorAll('.drop')[0];
let a = true;

function toggle1() {
    if(a == true){
        low.classList.add('none');
        drop.classList.remove('drop-select');
        a = false;
    }else{
        low.classList.remove('none');
        drop.classList.add('drop-select');
        a = true;
    };
};

drop1.addEventListener('click',toggle1);

const message = document.querySelector('.message-menu');
const low2 = document.querySelector('.message-low');
const drop2 = document.querySelector('#d2');
let b = true;



function toggle2() {
    if(b == true){
        low2.classList.add('none');
        drop2.classList.remove('drop-select');
        b = false;
    }else{
        low2.classList.remove('none');
        drop2.classList.add('drop-select');
        b = true;
    };
};

message.addEventListener('click',toggle2);



