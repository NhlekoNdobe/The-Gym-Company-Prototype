(function () {
  'use strict';

  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-tab');

      tabButtons.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });

      tabPanels.forEach(function (p) {
        p.classList.remove('is-active');
      });

      button.classList.add('is-active');
      button.setAttribute('aria-selected', 'true');

      var targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('is-active');
      }
    });
  });

  var heroStats = document.querySelectorAll('.hero-stats strong');

  heroStats.forEach(function (stat) {
    var target = parseInt(stat.textContent, 10);
    if (isNaN(target) || target === 0) return;

    var current = 0;
    var step = Math.max(1, Math.floor(target / 30));

    stat.textContent = '0';

    var timer = setInterval(function () {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = current;
    }, 40);
  });
})();