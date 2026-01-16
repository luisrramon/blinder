# Blinder 🕶️
**Blinder** is a fun, simple browser extension that lets you "blind" yourself to unwanted content. Just add keywords, and any text containing them will be blurred instantly.

## Key Features

* **Real-Time Protection:** Uses `MutationObserver` to detect and blur content dynamically as you scroll (perfect for infinite-scroll sites like Reddit, X, and YouTube).
* **Context-Aware Blurring:** Logic identifies the "closest" parent container (e.g., a tweet or news card) to ensure no surrounding spoiler text "leaks" through.
* **Reactive Storage:** Integrated with `chrome.storage.local` and `storage.onChanged` to apply keyword updates instantly without requiring a page refresh.
* **Clean UI:** A modern, minimalist popup interface for managing your banned words list.
* **Performance Optimized:** Includes "loop protection" to prevent the script from re-processing the same elements, maintaining high browser speed.

## Tech Stack

* **JavaScript (ES6+):** Core logic, DOM traversal, and event handling.
* **Chrome Extensions API (Manifest V3):** Using Storage and Content Script APIs.
* **HTML5 & CSS3:** Responsive popup design and "frosted glass" blur effects.

## Installation & Setup

Since this is a developer version, you can load it directly into Chrome:

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/blinder.git](https://github.com/YOUR_USERNAME/blinder.git)
2. Open Chrome and navigate to `chrome://extensions/`.
3. **Enable Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `blinder` folder.
5. **Pin the extension** to your toolbar for easy access!

## Improvements & Features
* **Master Toggle:** Add a global ON/OFF switch in the popup to pause filtering without losing saved keywords.
* **Hover-to-Reveal:** Implement a "peek" feature that unblurs content when the user hovers over a container for 3 seconds
* **Domain Whitelisting:** Allow users to specific "Trusted Sites" where the extension will automatically stay disabled