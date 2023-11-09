// 팝업창 코드
const btn = document.getElementById('message-icon1');
const btn2 = document.getElementById('transmit');
const base = document.querySelector('.box');
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
    if(pop.target == base){
        popUp.style.display = 'none';
    }
}

const message1 = document.getElementById('dm1');
const message2 = document.getElementById('dm2');
const dm = document.querySelectorAll('.dm');
const light = document.querySelector('.tail');
const messageView = document.querySelector('.message-view');
const messageView1 = document.querySelector('.message-view1');
const messageView2 = document.querySelector('.message-view2');
const userName = document.querySelector('.user-name');
const userText = document.querySelector('.user-text');


message1.onclick = function(){
    light.style.display = 'none';
    messageView.style.display = 'none';
    messageView2.style.display = 'none';
    messageView1.style.display = 'flex';
    userName.classList.add('read');
    userText.classList.add('read');
    userText.style.color = 'grey';
}


message2.onclick = function(){
    messageView.style.display = 'none';
    messageView1.style.display = 'none';
    messageView2.style.display = 'flex';
}

dm.forEach(item => {

    item.addEventListener('click',()=>{
        dm.forEach(item => item.classList.remove('select-color'));
        item.classList.add('select-color');
    });

});


// 채팅창 하트 클릭시 하트 효과
const like = document.querySelector('.heart1');
const likeOn = document.querySelector('.heart2')
const like2 = document.querySelector('.heart3');
const likeOn2 = document.querySelector('.heart4')

like.addEventListener('click',()=>{
    like.classList.add('none');
    likeOn.classList.remove('none');
})

likeOn.addEventListener('click',()=>{
    like.classList.remove('none');
    likeOn.classList.add('none');
})


like2.addEventListener('click',()=>{
    like2.classList.add('none');
    likeOn2.classList.remove('none');
})

likeOn2.addEventListener('click',()=>{
    like2.classList.remove('none');
    likeOn2.classList.add('none');
})




