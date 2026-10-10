(function () {
  var root = document.documentElement;
  var btn = document.querySelector('[data-theme-toggle]');
  var label = document.querySelector('[data-theme-label]');
  function sync() { if (label) label.textContent = root.dataset.theme === 'dark' ? 'Dark' : 'Light'; if (btn) btn.setAttribute('aria-pressed', root.dataset.theme === 'dark'); }
  sync();
  if (btn) btn.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('getij-theme', next); } catch (e) {}
    sync();
  });

  // Tag filters: chips in [data-filters="<id>"] filter the [data-tags] items inside #<id>
  document.querySelectorAll('[data-filters]').forEach(function (filters) {
    var id = filters.dataset.filters;
    var list = document.getElementById(id);
    var empty = document.querySelector('[data-empty="' + id + '"]');
    if (!list) return;
    filters.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-filter]');
      if (!chip) return;
      var tag = chip.dataset.filter, shown = 0;
      filters.querySelectorAll('[data-filter]').forEach(function (c) { c.setAttribute('aria-pressed', c === chip); });
      list.querySelectorAll('[data-tags]').forEach(function (item) {
        var on = !tag || item.dataset.tags.split('|').indexOf(tag) > -1;
        item.hidden = !on; if (on) shown++;
      });
      list.querySelectorAll('[data-filter-group]').forEach(function (group) {
        group.hidden = !group.querySelector('[data-tags]:not([hidden])');
      });
      if (empty) empty.hidden = shown > 0;
    });
  });
})();
