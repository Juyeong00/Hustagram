const sign_emailElem = document.querySelector('#sign_email');
        const IdElem = document.querySelector('.id');
        const log_link_btnElem = document.querySelector('.log_link_btn');

        sign_emailElem.addEventListener('keyup', () => {

if (IdElem.value) {  
    log_link_btnElem.disabled = false;
    log_link_btnElem.style.backgroundColor = '#0095F6';

} else { 
    log_link_btnElem.disabled = true; 
    log_link_btnElem.style.backgroundColor = '#B2DFFC';
}
});

function btn(){
        alert('이메일로 링크가 전송 되었습니다.');
        window.location ='../html/login.html';
        }