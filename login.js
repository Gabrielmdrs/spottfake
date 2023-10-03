document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorText = document.querySelector('.form-control small');

    form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;


    if (username === 'Robson123' && password === '12345678') {
        alert("Login bem-sucedido!");
        // bootbox.alert({
        // message: 'Login bem-sucedido!',
        // callback: function () {
            
        //     window.location.href = 'pagina_de_redirecionamento.html';
        // }
        // });
    } else {

        errorText.textContent = 'Nome de usuário ou senha incorretos. Tente novamente.';
        errorText.style.display = 'block';
    }
    });

    usernameInput.addEventListener('input', function () {
    errorText.style.display = 'none';
    });

    passwordInput.addEventListener('input', function () {
    errorText.style.display = 'none';
    });
});
