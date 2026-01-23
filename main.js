function copyEmail() {
  const email = 'camiz280211@gmail.com';

  navigator.clipboard
    .writeText(email)
    .then(function () {
      const copyIcon = document.getElementById('copy-icon');
      const emailText = document.getElementById('email-text');

      copyIcon.className = 'fa-solid fa-check';
      copyIcon.style.color = '#0ea5e9';

      const originalText = emailText.textContent;
      emailText.textContent = '¡Copy!';
      emailText.style.color = '#0ea5e9';

      setTimeout(function () {
        copyIcon.className = 'fa-solid fa-copy';
        copyIcon.style.color = '';
        emailText.textContent = originalText;
        emailText.style.color = '';
      }, 2000);
    })
    .catch(function (err) {
      console.error('Error copying: ', err);
      alert('The email could not be copied.');
    });
}
