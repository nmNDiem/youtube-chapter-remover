function removeChapters() {
  const chapterPanel = document.querySelector(
    'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-macro-markers-description-chapters"]'
  );

  if (chapterPanel) {
    chapterPanel.remove();
    console.log("Removed video chapters panel.");
  }
}

removeChapters();

const observer = new MutationObserver(removeChapters);
observer.observe(document.body, { childList: true, subtree: true });
