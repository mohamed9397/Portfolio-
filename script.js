
function welcomeMessage() {
    const hour = new Date().getHours();
    let message = '';
    
    if (hour >= 5 && hour < 12) {
        message = 'Bonjour et bienvenue sur mon portfolio ! 🌅';
    } else if (hour >= 12 && hour < 18) {
        message = 'Bon après-midi et bienvenue ! ☀️';
    } else if (hour >= 18 && hour < 22) {
        message = 'Bonsoir et bienvenue ! 🌆';
    } else {
        message = 'Bienvenue ! Il est tard, bonne visite 🌙';
    }
    
    console.log(message);
  
}


welcomeMessage();

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nom = document.getElementById('nom').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
   
    if (nom === '' || email === '' || message === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }
    
    
    alert('Merci pour votre message ! Je vous recontacterai bientôt.');
    contactForm.reset();
});

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });        }
    });
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});