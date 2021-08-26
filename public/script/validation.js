const signInSubmit = document.querySelector('.submit');
const username = document.querySelector('.un');
const password = document.querySelector('.pass');

signInSubmit.addEventListener('click', (event) => {
  if (username.value.length === 0) {
    console.log('Enter username');
    event.preventDefault();
  }
});
