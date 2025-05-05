// Basic form validation (to be expanded if needed)
document.querySelector('form')?.addEventListener('submit', (e) => {
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});