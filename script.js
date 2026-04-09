document.addEventListener("DOMContentLoaded", () => {
    const circleContainers = document.querySelectorAll('.circles');
    
    circleContainers.forEach(container => {
        const rating = parseInt(container.getAttribute('data-rating')) || 0;
        
        for (let i = 1; i <= 5; i++) {
            const circle = document.createElement('div');
            circle.classList.add('circle');
            
            if (i <= rating) {
                circle.classList.add('filled');
            }
            
            container.appendChild(circle);
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                if (targetElement.classList.contains('mode-container')) {
                    targetElement.classList.add('active');
                }
            }
        });
    });

    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');
    
    if (dropbtn && dropdown) {
        dropbtn.addEventListener('click', function(e) {
            e.stopPropagation(); 
            dropdown.classList.toggle('show');
        });
    }

    document.addEventListener('click', function() {
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});

function toggleMode(modeId) {
    const clickedContainer = document.getElementById(modeId);
    const isCurrentlyActive = clickedContainer.classList.contains('active');
    
    if (isCurrentlyActive) {
        clickedContainer.classList.remove('active');
    } else {
        clickedContainer.classList.add('active');
    }
}
