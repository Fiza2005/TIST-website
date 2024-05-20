document.querySelectorAll('nav ul li a').forEach(button => {
    button.addEventListener('click', (e) => {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300); // Duration of the animation
    });
});
