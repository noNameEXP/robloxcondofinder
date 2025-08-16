fetch('/api/log').catch(() => {});

// Create overlay to block interaction
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.background = 'rgba(0,0,0,0.3)';
overlay.style.zIndex = '9998';
document.body.appendChild(overlay);

// Create fake alert box
const modal = document.createElement('div');
modal.style.position = 'fixed';
modal.style.top = '40%';
modal.style.left = '50%';
modal.style.transform = 'translate(-50%, -50%)';
modal.style.width = '80%';
modal.style.maxWidth = '300px';
modal.style.background = '#fff';
modal.style.borderRadius = '12px';
modal.style.boxShadow = '0 0 20px rgba(0,0,0,0.4)';
modal.style.fontFamily = '-apple-system, BlinkMacSystemFont, sans-serif';
modal.style.textAlign = 'center';
modal.style.padding = '20px';
modal.style.zIndex = '9999';
modal.innerHTML = `
  <p style="font-size:17px; margin-bottom:20px;">Downloading zip-bomb.zip<br>0 / 1,000 GB</p>
  <button style="padding:10px 20px; font-size:16px; border:none; background:#007aff; color:white; border-radius:8px;">OK</button>
`;

document.body.appendChild(modal);

// Auto-dismiss after 3 seconds
setTimeout(() => {
  modal.remove();
  overlay.remove();
  window.location.href = 'https://www.google.com/search?q=watermelon&tbm=isch';
}, 3000);
