// In verify.js
document.addEventListener('DOMContentLoaded', () => {
    const discordNameEl = document.querySelector('.discord-name');
    const verificationStatusEl = document.querySelector('.verification-status');
    
    discordNameEl.textContent = 'YourDiscordName#1234';
    verificationStatusEl.textContent = 'Verified';
});

document.addEventListener('DOMContentLoaded', function() {
    const verifyButton = document.getElementById('verifyBtn');
    const verificationStatus = document.getElementById('verificationStatus');

    verifyButton.addEventListener('click', function() {
        verificationStatus.textContent = 'Verified';
        verificationStatus.style.color = '#28A745';

        // works!
        console.log('Verification status updated.');
        // TODO: COMPLETE REDIS TABLE
    });
});

