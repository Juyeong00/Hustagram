const button = document.getElementsByClassName("sign_btn")[0];
        const inputId = document.getElementsByClassName("id")[0];
        const inputName = document.getElementsByClassName("name")[0];
        const inputUserName = document.getElementsByClassName("username")[0];
        const inputPw = document.getElementsByClassName("pw")[0];

    inputId.addEventListener("keyup", validate);
    inputPw.addEventListener("keyup", validate);
    inputname.addEventListener("keyup", validate);
    inputusername.addEventListener("keyup", validate);

    function validate() {
        if (!(inputId.value && inputPw.value && inputName.value && inputUserName.value)) {
        button.disabled = true;
        } else {
        button.disabled = false;
        button.style.cursor = "pointer";
        }

    if (!(inputId.value && inputPw.value && inputName.value && inputUserName.value)) {
        button.classList.remove("sign_btnDisabled");
        } else {
        button.classList.add("sign_btnDisabled");
        }
    }


    const idInput = document.getElementById('id');
    const nameInput = document.getElementById('name');
    const usernameInput = document.getElementById('username');
    const pwInput = document.getElementById('pw');
    const loginBtn = document.getElementById('sign_btn');


    const isActiveSign = () => {
        let idValue = idInput.value;
        let nameValue = nameInput.value;
        let usernameValue = usernameInput.value;
        let pwValue = pwInput.value;

    if(
        (idValue && nameValue && usernameValue && pwValue) && 
        (nameValue.length >= 5) && (usernameValue.length >= 5) && (pwValue.length >= 5)
        (idValue.includes('@') || idValue.length >= 5)
        ) {
        sign_btn.disabled = false;
        sign_btn.style.opacity = 1;
        sign_btn.style.cursor = 'pointer';
        }
        else {
            sign_btn.disabled = true;
            sign_btn.style.opacity = .3;
            }
        }

        const init = () => {
            idInput.addEventListener('input', isActiveSign);
            pwInput.addEventListener('input', isActiveSign);
            nameInput.addEventListener('input', isActiveSign);
            usernameInput.addEventListener('input', isActiveSign);
            idInput.addEventListener('keyup', isActiveSign);
            pwInput.addEventListener('keyup', isActiveSign);
            nameInput.addEventListener('keyup', isActiveSign);
            usernameInput.addEventListener('keyup', isActiveSign);
        }
        
        init();

        function btn(){
        alert('회원가입이 완료되었습니다.');
        window.location ='../html/login.html';
        }