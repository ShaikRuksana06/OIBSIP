const validUsername = 'ruksana';
const validPassword = '1234';
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');
  if (username === validUsername && password === validPassword) {
    message.style.color = 'green';
    message.innerText = 'Login successful! Redirecting...';
    setTimeout(() => {

      window.location.href = 'welcome.html'; 
    }, 1000);
  } else {
    message.style.color = 'red';
    message.innerText = 'Invalid username or password.';
  }
});
