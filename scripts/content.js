// Scans DOM for elements containing banned keywords and applies blur effect
const applyBlinder = () => {

  // Pull persisted keywords from chrome.storage.local
  chrome.storage.local.get(['bannedWords'], (result) => {
    const words = result.bannedWords || [];

    if (words.length === 0) return; // Stop if there are no words to filter
    
    // Limit to common text nodes to reduce DOM scanning overhead
    const elements = document.querySelectorAll('p, span, b, i, li, h1, h2, h3');

    elements.forEach(el => {
      const text = el.innerText ? el.innerText.toUpperCase() : "";

      const matchFound = words.some(word => text.includes(word.toUpperCase()));
        
      if (matchFound) {
        // Blur the closest parent container to hide entire content, not just the text node
        const container = el.closest('div, article, section');
          
        if (container) {
          container.style.filter = "blur(15px)";
          container.style.opacity = "0.5";
          container.style.transition = "all 0.5s ease";
          container.style.pointerEvents = "none"; // Disable interaction with blurred content
        }
      }
    });
  });
};

const observer = new MutationObserver((mutations) => {
  if (mutations.length > 0) {
    applyBlinder();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

applyBlinder();

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === 'local' && changes.bannedWords) {
    applyBlinder();
  }
});
