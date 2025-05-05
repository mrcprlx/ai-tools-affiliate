document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        details.classList.toggle('hidden');
        button.textContent = details.classList.contains('hidden') ? 'Show Details' : 'Hide Details';
    });
});
document.querySelector('form')?.addEventListener('submit', (e) => {
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;
    if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});