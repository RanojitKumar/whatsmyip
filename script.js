window.onload = function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip;
        })
        .catch(error => {
            document.getElementById('ip-address').textContent = 'Unable to fetch IP address';
            console.error('Error fetching IP address:', error);
        });

    // Set dynamic year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Copy IP address to clipboard and show notification
    document.getElementById('copy-button').addEventListener('click', function() {
        const ipAddress = document.getElementById('ip-address').textContent;
        navigator.clipboard.writeText(ipAddress).then(function() {
            const button = document.getElementById('copy-button');
            button.textContent = 'Copied!';
            button.classList.add('copied');
            setTimeout(() => {
                button.textContent = 'Copy IP';
                button.classList.remove('copied');
            }, 2000);
        }, function() {
            alert('Failed to copy IP address.');
        });
    });

    // Toggle menu on mobile
    document.getElementById('menu-icon').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('show');
    });
};
