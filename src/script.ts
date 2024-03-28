document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form') as HTMLFormElement;
    const loginForm = document.getElementById('login-form') as HTMLFormElement;

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = (document.getElementById('signup-username') as HTMLInputElement).value;
        const password = (document.getElementById('signup-password') as HTMLInputElement).value;
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        alert(data.message);
    });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = (document.getElementById('login-username') as HTMLInputElement).value;
        const password = (document.getElementById('login-password') as HTMLInputElement).value;
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        alert(data.message);
    });
});
