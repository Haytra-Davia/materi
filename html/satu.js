const darkModeToggle = document.querySelector('.toggle-switch');
    const body = document.body;

    // Check localStorage for theme preference
    if(localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // Save preference to localStorage
        if(body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    function toggleMenu() {
        document.querySelector(".nav-links").classList.toggle("active");
    }