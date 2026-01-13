// Target keyword/phrase to blur across the page
const TARGET_WORD = "NEWS"; 

// Scans DOM for elements containing banned keywords and applies blur effect
const applyRedAlert = () => {

  const elements = document.querySelectorAll('p, span, b, i, li, h1, h2, h3');

  elements.forEach(el => {
    if (el.innerText && el.innerText.toUpperCase().includes(TARGET_WORD)) {
      
      // Blur the closest parent container to hide entire content, not just the text node
      const container = el.closest('article, li, section, div');

      if (container) {
        container.style.filter = "blur(15px)";
        container.style.opacity = "0.5";
        container.style.transition = "all 0.5s ease";
      }

      container.style.pointerEvents = "none"; // Disable interaction with blurred content
      
      console.log("Blinder: Container succesfully blurred");
    }
  });
};

applyRedAlert();