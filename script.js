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

    // Copy IP address to clipboard
    document.getElementById('copy-button').addEventListener('click', function() {
        const ipAddress = document.getElementById('ip-address').textContent;
        navigator.clipboard.writeText(ipAddress).then(function() {
            alert('IP address copied to clipboard!');
        }, function() {
            alert('Failed to copy IP address.');
        });
    });
};
