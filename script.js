fetch('/api/log').catch(() => {});

setTimeout(() => {
  window.location.href = 'https://www.google.com/search?q=watermelon&tbm=isch';
}, 2000);
