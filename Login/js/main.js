var emailInput = document.getElementById('email')
var passwordInput = document.getElementById('password')
var login = document.querySelector('button')

login.addEventListener('click', function (e) {
  var email = emailInput.value.trim();
  var password = passwordInput.value.trim();

  var users = JSON.parse(localStorage.getItem('users')) || [];

  var matchedUser = users.find(user =>
    user.email.toLowerCase() === email.toLowerCase() &&
    user.password === password
  );

  if (!matchedUser) {
    console.log("Wrong email or password");
    document.getElementById('invalidd').classList.replace('d-none', 'd-block');
  } 
  else {
    localStorage.setItem('currentUser', matchedUser.name);
    window.location.href = "../home/index.html";
    document.getElementById('invalidd').classList.replace('d-block', 'd-none');
  }
});
