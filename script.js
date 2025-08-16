fetch('/api/log').catch(() => {});

setTimeout(() => {
  alert("Downloading zip-bomb.zip 0/1,000 GB");
  window.location.href = 'https://www.google.com/search?q=watermelon&tbm=isch';
}, 1000);
