window.onload = function() {
    function errorLogin() {
        const form = document.getElementById('form');
        const  email = document.getElementById('email');
        const errorEmail = document.getElementById('warningMail');
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailText = email.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(emailText)) {
                errorEmail.textContent = "Email không đúng định dạng";
                console.log(errorEmail.textContent);
            } else {
                errorEmail.textContent = "";
                window.location.href = "./index.html";
            }
        })
    }
    errorLogin();

    function show() {
        let passFied = document.getElementById('password');
        let btn = document.getElementById('show');
        btn.addEventListener('click', function() {
            if(passFied.type==='password') {
                passFied.type = 'text';
                btn.textContent = 'HIDE';
            }
            else {
                passFied.type = 'password';
                btn.textContent = 'SHOW';
            }
        })
    }
    show();
}