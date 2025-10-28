var nameInput = document.getElementById('name')
var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var signupBtn = document.querySelector('button')

if (localStorage.getItem('users') == null) {
    var urlArray = []
} else {
    var urlArray = JSON.parse(localStorage.getItem('users'))
}


signupBtn.addEventListener('click', addUser)

function addUser() {
    if (nameValidation() && emailValidation() && passwordValidation()) {
        if (emailExists()) {
            var link = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value.trim()
            }

            urlArray.push(link)
            localStorage.setItem('users', JSON.stringify(urlArray))

            document.getElementById('success').classList.replace('d-none', 'd-block')
            document.getElementById('invalid').classList.replace('d-block', 'd-none')
            document.getElementById('exists').classList.replace('d-block', 'd-none')
            
            clearInput()
            displayRow()
        } else {
            document.getElementById('success').classList.replace('d-block', 'd-none')
            document.getElementById('invalid').classList.replace('d-block', 'd-none')
            document.getElementById('exists').classList.replace('d-none', 'd-block')
        }
    } else {
        document.getElementById('success').classList.replace('d-block', 'd-none')
        document.getElementById('invalid').classList.replace('d-none', 'd-block')
        document.getElementById('exists').classList.replace('d-block', 'd-none')
    }
}

function clearInput() {
    nameInput.value = ''
    emailInput.value = ''
    passwordInput.value = ''
}

function nameValidation() {
    var pattern = /^[A-Za-z ]{3,}$/;
    var text = nameInput.value

    if (pattern.test(text)) {
        return true
    } else {
        return false
    }
}

function emailValidation() {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var text = emailInput.value

    if (pattern.test(text)) {
        return true
    } else {
        return false
    }
}

function emailExists() {
    var text = emailInput.value.trim();

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var duplicate = users.some(user => user.email.toLowerCase() === text.toLowerCase());

    if (duplicate) {
        return false;
    }

    return true;

}

function passwordValidation() {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var text = passwordInput.value

    if (pattern.test(text)) {
        return true
    } else {

        return false
    }
}


