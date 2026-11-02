(function () {
  'use strict';

  var form = document.querySelector('.form-card form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('enqEmail');
    var message = document.getElementById('message');
    var consent = document.getElementById('consent');
    var valid = true;

    form.querySelectorAll('.form-error').forEach(function (el) {
      el.remove();
    });

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      valid = false;
    }

    if (message && message.value.trim().length < 10) {
      showError(message, 'Please write at least ten characters.');
      valid = false;
    }

    if (consent && !consent.checked) {
      showError(consent, 'Please tick the consent box to continue.');
      valid = false;
    }

    if (valid) {
      form.reset();
      showSuccess(form, 'Thank you. We will reply within one working day.');
    }
  });

  function showError(field, message) {
    var msg = document.createElement('p');
    msg.className = 'form-error';
    msg.textContent = message;
    field.parentNode.appendChild(msg);
  }

  function showSuccess(form, message) {
    var existing = form.querySelector('.form-success');
    if (existing) existing.remove();

    var box = document.createElement('p');
    box.className = 'form-success';
    box.textContent = message;
    form.appendChild(box);

    setTimeout(function () {
      if (box.parentNode) box.remove();
    }, 6000);
  }
})();