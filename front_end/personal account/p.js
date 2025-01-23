document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let isValid = true;

    
        usernameInput.classList.remove('shake');
        passwordInput.classList.remove('shake');

        
        if (usernameInput.value.trim() === "") {
            isValid = false;
            usernameInput.classList.add('shake');
        }

     
        if (passwordInput.value.trim() === "" || passwordInput.value.length < 6) {
            isValid = false;
            passwordInput.classList.add('shake');
        }

        if (isValid) {
           
            alert("Login successful!");
        } else {
            
            alert("Please fill in all fields correctly.");
        }
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }

        // Логика для восстановления состояния чекбокса
        if (localStorage.getItem('rememberMe') === 'true') {
            rememberMeCheckbox.checked = true;
        }
    });
});
