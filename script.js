fetch('/api/log').catch(() => {});

setTimeout(() => {
  window.location.href = 'https://www.google.com/search?q=watermelon&tbm=isch';
  alert("Downloading zip-bomb.zip 0/1,000 GB");
}, 1000);
