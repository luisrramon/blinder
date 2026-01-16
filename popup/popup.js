const input = document.getElementById('wordInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const wordList = document.getElementById('wordList');

// Load words from storage and display them
const updateUI = () => {
    chrome.storage.local.get(['bannedWords'], (data) => {
        const words = data.bannedWords || [];
        wordList.innerHTML = ''; // Clear current list

        words.forEach((word, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${word}</span>
                <span class="delete-btn" data-index="${index}">x</span>
            `;
            wordList.appendChild(li);
        });
    });
};

// Add a new word
addBtn.addEventListener('click', () => {
    const newWord = input.value.trim().toUpperCase();
    if (!newWord ) return;

    chrome.storage.local.get(['bannedWords'], (data) => {
        const words = data.bannedWords || [];
        if (!words.includes(newWord)) {
            const updatedWords = [...words, newWord];
            chrome.storage.local.set({ bannedWords: updatedWords }, () => {
                input.value = '';
                updateUI();
            });
        }
    });
});

// Delete a word
wordList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        chrome.storage.local.get(['bannedWords'], (data) => {
            const words = data.bannedWords || [];
            words.splice(index, 1);
            chrome.storage.local.set({ bannedWords: words }, () => {
                updateUI();
            });
        });
    }
});

clearBtn.addEventListener('click', () => {
    if (confirm("Are you sre you want to clear all words?")) {
        chrome.storage.local.set({ bannedWords: [] }, () => {
            updateUI();
        });
    }
});

updateUI();