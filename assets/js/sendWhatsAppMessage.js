function sendMessage() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const email = document.getElementById('email').value;

  if (name.length > 0 && message.length > 0 && email.length > 0)
    location.href = `https://wa.me/541155815805?text=Hi Leo! I'm ${name}. ${message}. Mi Email is: ${email}. Reggards!`;
  else location.href = `https://wa.me/541155815805?text=Hi Leo!`;
}

function test() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const email = document.getElementById('email').value;

  console.log('name: ' + name);
  console.log('message: ' + message);
  console.log('email: ' + email);
}
