document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Activate Navigation Link on Scroll
    window.addEventListener('scroll', () => {
        let sections = document.querySelectorAll('.section');
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight - 100) {
                let id = section.getAttribute('id');
                document.querySelector('nav ul li a.active').classList.remove('active');
                document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
            }
        });
    });

    // Skill Bars Animation
    let skillSection = document.querySelector('#skills');
    let skillBars = document.querySelectorAll('.skill-level');

    function showSkillBars() {
        skillBars.forEach(skill => {
            let width = skill.getAttribute('data-level');
            skill.style.width = width + '%';
        });
    }

    window.addEventListener('scroll', () => {
        let skillSectionPos = skillSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if (skillSectionPos < screenPosition) {
            showSkillBars();
        }
    });

    // Interactive Cards Animation
    let cards = document.querySelectorAll('.task-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Show 'Back to Top' Button
    let backToTopButton = document.createElement('div');
    backToTopButton.classList.add('back-to-top');
    backToTopButton.innerHTML = '↑';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
