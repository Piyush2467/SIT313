document.getElementById('subscribeForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const messageBox = document.getElementById('message');
  messageBox.style.display = 'none';

  try {
    const response = await fetch('/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${encodeURIComponent(email)}`
    });

    const result = await response.json();

    messageBox.style.display = 'block';
    messageBox.textContent = result.message;

    if (result.success) {
      messageBox.className = 'success';
    } else {
      messageBox.className = 'error';
    }

  } catch (err) {
    messageBox.style.display = 'block';
    messageBox.textContent = 'Something went wrong!';
    messageBox.className = 'error';
  }
});
