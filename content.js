const observer = new MutationObserver(removeJunk);
observer.observe(document.body, { childList: true, subtree: true });

function removeJunk() {
  removeShorts();
  removePlayables();
  removeAds();
  removeMenuJunk();
}

function removeShorts() {
  document
    .querySelectorAll(
      'ytd-rich-item-renderer, ytd-rich-section-renderer, ytd-item-section-renderer'
    )
    .forEach(removeIfThereAreShorts);
}

function removeIfThereAreShorts(element) {
  if (element.textContent.includes('Shorts')) element.remove();
}

function removePlayables() {
  const dismissibles = document.querySelectorAll('#dismissible');
  for (const element of dismissibles) {
    if (element.textContent.includes('YouTube Playables')) element.remove();
  }
}

function removeAds() {
  document.querySelectorAll('.ytd-ad-slot-renderer').forEach((e) => e.remove());
}

function removeMenuJunk() {
  let elements = document.querySelectorAll('ytd-guide-section-renderer');
  for (const element of elements) {
    if (element.textContent.includes('More from YouTube')) element.remove();
    if (element.textContent.includes('Explore')) element.remove();
  }
  elements = document.querySelectorAll('ytd-guide-entry-renderer ');
  for (const element of elements) {
    if (element.textContent.includes('Shorts')) element.remove();
  }
}
