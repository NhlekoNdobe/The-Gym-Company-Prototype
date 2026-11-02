(function () {
  'use strict';

  var headers = document.querySelectorAll('.accordion-header');

  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var body = header.nextElementSibling;
      var isOpen = header.getAttribute('aria-expanded') === 'true';

      if (isOpen) {
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });

  headers.forEach(function (header) {
    var body = header.nextElementSibling;
    if (header.getAttribute('aria-expanded') === 'true') {
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
})();
js/services.js