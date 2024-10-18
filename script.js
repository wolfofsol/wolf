// A hamburger menü megnyitása és bezárása
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Esemény figyelés a hamburger menüre
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('menu-opened');
    navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"; // Váltás a láthatóság között
});
// Minden "reveal" osztályú elemet megcélzunk
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150; // Amikor a tartalom 150px-el feljebb van, akkor indítjuk

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;

        // Ha az elem a látható területen van, és még nincs aktiválva
        if (elementTop < windowHeight - revealPoint && !reveal.classList.contains('active')) {
            reveal.classList.add('active');
        }
    });
}

// Eseményfigyelő hozzáadása a görgetéshez
window.addEventListener('scroll', revealOnScroll);

// Az oldal betöltésekor is ellenőrizzük a helyzetet
revealOnScroll();
