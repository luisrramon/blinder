/**
 * Day 1: Foundation Logic
 * Purpose: Scan the page for a specific word and change its appearance.
 */

// 1. Define a temporary word to look for (choose something common on the site you'll test)
const TARGET_WORD = "NEWS"; 

const applyRedAlert = () => {
  // 2. Grab all elements that usually contain text
  const elements = document.querySelectorAll('p, span, h1, h2, h3, div');

  elements.forEach(el => {
    // Check if the element has text and if it includes our target word
    if (el.children.length === 0 && el.innerText.toUpperCase().includes(TARGET_WORD)) {
      
      // 3. Visual modification: Change background to red
      // This is a placeholder for the "Blur" logic we will write later.
      el.style.backgroundColor = "red";
      el.style.color = "white";
      
      console.log(`Blinder: Found and highlighted "${TARGET_WORD}"`);
    }
  });
};

// 4. Run the function once the script loads
applyRedAlert();