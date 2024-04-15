document.addEventListener('DOMContentLoaded', function() {
    
    let links = document.querySelectorAll('.sections li a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            let targetId = this.getAttribute('href'); 
            let targetSection = document.querySelector(targetId); 
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



function toggleMenu() {
    let menu = document.querySelector('.menu-items');
    menu.classList.toggle('visible');
}

document.addEventListener('DOMContentLoaded', function() {
    
    let btns = document.querySelector('.best-seller button a');
    btns.forEach(function(btn) {
        btn.addEventListener('click', function(r) {
            r.preventDefault(); 
            let targetId1 = this.getAttribute('href'); 
            let targetSection1 = document.querySelector(targetId1); 
            if (targetSection1) {
                targetSection1.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});