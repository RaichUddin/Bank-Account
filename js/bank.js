
const raich = document.getElementById('button-submit').
    addEventListener('click', function () {
        const userEmail = document.getElementById('user-email');
        const userText = userEmail.value;
        const userPassword = document.getElementById('user-password').value;
        if (userText == 'rabbitrade10@gmail.com' && userPassword
            == 'fakir') {
            window.location.href = 'account.html';
        }
    })