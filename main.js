var usernam = document.querySelector('input[type="text"]')
var password = document.querySelector('input[type="password"]')
var email = document.querySelector('input[type="email"]')
var btn = document.querySelector('input[type="submit"]')
var myForm = document.querySelector('form')

btn.addEventListener('click', formValidacija)

function formValidacija(e) {
  e.preventDefault()
  var usernameVal = usernam.value
  var passwordVal = password.value
  var emailVal = email.value

  var errors = []
  if (usernameVal.length > 20) {
    usernam.style.border = '1px solid tomato'
    errors.push('Predugačak username')
  }
  if (passwordVal != '12345') {
    password.style.border = '1px solid  tomato'
    errors.push('Pogrešna lozinka')
  }
  if (emailVal.indexOf('gmail.com') == -1) {
    email.style.border = '1px solid tomato'
    errors.push('Email mora da bude gmail.com')
  }
  if (errors != 0) {
    alert('greska')
  } else {
    myForm.submit()
  }
}
