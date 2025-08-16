// Log IP silently
fetch('/api/log').catch(() => {});

// Create fake alert modal
const modal = document.createElement('div');
modal.id = 'fakeAlert';
modal.style.position = 'fixed';
modal.style.top = '30%';
modal.style.left = '10%';
modal.style.width = '80%';
modal.style.background = 'white';
modal.style.padding = '20px';
modal.style.fontFamily = 'sans-serif';
modal.style.borderRadius = '10px';
modal.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
modal.style.zIndex = '9999';
modal.innerHTML = `
  <h2>📦 Downloading zip-bomb.zip</h2>
  <p id="progress">0 / 1,000 GB</p>
`;

document.body.appendChild(modal);

// Animate the counter
let count = 0;
const progress = document.getElementById('progress');

const interval = setInterval(() => {
  count += Math.floor(Math.random() * 50); // Random speed
  if (count >= 1000) {
    count = 1000;
    clearInterval(interval);
    window.location.href = 'https://www.google.com/search?q=watermelon&tbm=isch';
  }
  progress.textContent = `${count} / 1,000 GB`;
}, 100);
