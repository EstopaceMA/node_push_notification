console.log('Service Worker Loaded');

self.addEventListener("push", (e) => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Express JS',
        icon: 'https://staging.ufs-armstrong.com/lite/assets/images/login_logo.png'
    });
}); 