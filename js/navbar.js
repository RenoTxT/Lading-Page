let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav div div div a');

window.addEventListener('load', function() {
    
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.getElementById('btnA').classList.add('active');

    window.scrollTo({
        top: 0,
    });
});

function setActive(buttonId) {
    
    navLinks.forEach(link => link.classList.remove('active'));
    
    const clickedLink = document.getElementById(buttonId);
    clickedLink.classList.add('active');
}

document.getElementById("btnA").addEventListener('click', () => setActive('btnA'));
document.getElementById("btnB").addEventListener('click', () => setActive('btnB'));
document.getElementById("btnC").addEventListener('click', () => setActive('btnC'));
document.getElementById("btnD").addEventListener('click', () => setActive('btnD'));


