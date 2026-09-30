// A real link remains available when dialogs or JavaScript are unavailable.
(() => {
  const catalog = window.SOURCE_CATALOG || {};
  if (typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'citation-dialog';
  dialog.setAttribute('aria-labelledby', 'citation-heading');
  dialog.innerHTML = '<form method="dialog"><button class="citation-close" aria-label="Close citation">×</button></form><h2 id="citation-heading" class="citation-label"></h2><p class="citation-text"></p><p class="citation-context"></p><a class="citation-source-link" target="_blank" rel="noopener noreferrer">Open original source ↗</a><br><a class="citation-directory">View in Sources →</a>';
  document.body.append(dialog);
  document.addEventListener('click', event => {
    const link = event.target.closest('a.source-ref');
    if (!link) return;
    const id = link.getAttribute('href').split('#')[1];
    const citation = catalog[id];
    if (!citation) return;
    event.preventDefault();
    dialog.querySelector('.citation-label').textContent = '[' + citation.number + '] ' + citation.category;
    dialog.querySelector('.citation-text').textContent = citation.text;
    dialog.querySelector('.citation-context').textContent = citation.note;
    const original = dialog.querySelector('.citation-source-link');
    original.hidden = !citation.url;
    if (citation.url) original.href = citation.url;
    dialog.querySelector('.citation-directory').href = 'sources.html#' + id;
    dialog.showModal();
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
})();
