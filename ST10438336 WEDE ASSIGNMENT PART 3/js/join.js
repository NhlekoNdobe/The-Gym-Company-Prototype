(function () {
  'use strict';

  var form = document.querySelector('.form-grid');
  if (!form) return;

  var clubSelect = document.getElementById('homeClub');
  var planSelect = document.getElementById('plan');
  var steps = document.querySelectorAll('.progress-step');

  function updateProgress() {
    var hasClub = clubSelect && clubSelect.value !== '';
    var hasPlan = planSelect && planSelect.value !== '';

    steps.forEach(function (s) {
      s.classList.remove('is-active');
    });

    if (!hasClub && steps[0]) steps[0].classList.add('is-active');
    else if (hasClub && !hasPlan && steps[1]) steps[1].classList.add('is-active');
    else if (hasClub && hasPlan && steps[2]) steps[2].classList.add('is-active');
  }

  if (clubSelect) clubSelect.addEventListener('change', updateProgress);
  if (planSelect) planSelect.addEventListener('change', updateProgress);

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var terms = document.getElementById('terms');
    var valid = true;

    form.querySelectorAll('.form-error').forEach(function (el) {
      el.remove();
    });

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      valid = false;
    }

    if (phone && phone.value.trim().length < 9) {
      showError(phone, 'Please enter a valid phone number.');
      valid = false;
    }

    if (terms && !terms.checked) {
      showError(terms, 'You must accept the terms before continuing.');
      valid = false;
    }

    if (valid) {
      form.reset();
      updateProgress();
      showSuccess(form, 'Thank you. Your digital access card has been sent to your email.');
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

  updateProgress();
})();