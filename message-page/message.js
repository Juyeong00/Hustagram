const btn = document.getElementById('message-icon1');
const btn2 = document.getElementById('transmit');
const popUp = document.getElementById('pop-up');
const closeBtn = document.getElementById('close');

btn.onclick = function(){
    popUp.style.display = 'block';
}

btn2.onclick = function(){
    popUp.style.display = 'block';
}

closeBtn.onclick = function(){
    popUp.style.display = 'none';
}

window.onclick = function(pop){
    if(pop.target == popUp){
        popUp.style.display = 'none';
    }
}