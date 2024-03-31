// In verify.js
document.addEventListener('DOMContentLoaded', () => {
    const discordNameEl = document.querySelector('.discord-name');
    const verificationStatusEl = document.querySelector('.verification-status');
    
    // Example of setting dynamic content
    discordNameEl.textContent = 'YourDiscordName#1234'; // Replace with dynamic data
    verificationStatusEl.textContent = 'Verified'; // Replace based on actual status
});

document.addEventListener('DOMContentLoaded', function() {
    const verifyButton = document.getElementById('verifyBtn');
    const verificationStatus = document.getElementById('verificationStatus');

    verifyButton.addEventListener('click', function() {
        verificationStatus.textContent = 'Verified';
        verificationStatus.style.color = '#28A745'; // Ensure this targets the span correctly

        // Optional: Log to console or further actions
        console.log('Verification status updated.');
        // For example, redirect or display a message
        // window.location.href = 'nextPage.html';
    });
});

