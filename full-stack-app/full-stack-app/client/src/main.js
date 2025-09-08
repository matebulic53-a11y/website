// This file initializes the frontend application and handles client-side logic.

import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = '<h1>Welcome to the Full Stack App!</h1>';
    }
});