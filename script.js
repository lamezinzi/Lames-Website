console.log("JavaScript is connected!"); 
const toggleButton = document.getElementById('theme-toggle'); 

 

toggleButton.addEventListener('click', function() { 

    document.body.classList.toggle('dark-mode'); 

    if (document.body.classList.contains('dark-mode')) { 

        toggleButton.textContent = 'Light Mode'; 

    } else { 

        toggleButton.textContent = 'Dark Mode'; 

    } 

}); 
const texts = [ 

    "Hi, I'm Lame Zinzi Pontsho!", 

    "I'm an Aspiring Web Developer", 

    "I Build Cool Things", 

    "Welcome to My Portfolio!" 

]; 

 

let textIndex = 0; 

let charIndex = 0; 

let isDeleting = false; 

const typingElement = document.getElementById('typing-headline'); 

 

function typeEffect() { 

    const currentText = texts[textIndex]; 

    if (isDeleting) { 

        typingElement.textContent = currentText.substring(0, charIndex - 1); 

        charIndex--; 

    } else { 

        typingElement.textContent = currentText.substring(0, charIndex + 1); 

        charIndex++; 

    } 

    if (!isDeleting && charIndex === currentText.length) { 

        isDeleting = true; 

        setTimeout(typeEffect, 2000); 

        return; 

    } 

    if (isDeleting && charIndex === 0) { 

        isDeleting = false; 

        textIndex = (textIndex + 1) % texts.length; 

    } 

    const speed = isDeleting ? 50 : 100; 

    setTimeout(typeEffect, speed); 

} 

 

typeEffect();
const backToTopButton = document.getElementById('back-to-top'); 

 

window.addEventListener('scroll', function() { 

    if (window.scrollY > 300) { 

        backToTopButton.style.display = 'block'; 

    } else { 

        backToTopButton.style.display = 'none'; 

    } 

}); 

const revealButton = document.getElementById('reveal-fact'); 

const funFact = document.getElementById('fun-fact'); 

 

revealButton.addEventListener('click', function() { 

    // Toggle the fact visibility 

    funFact.classList.toggle('show'); 

 

    // Change button text based on visibility 

    if (funFact.classList.contains('show')) { 

        revealButton.textContent = 'J Hide Fun Fact'; 

    } else { 

        revealButton.textContent = '🔍 Click to Reveal a Fun Fact About Me!'; 

    } 

}); 
 

backToTopButton.addEventListener('click', function() { 

    window.scrollTo({ top: 0, behavior: 'smooth' }); 

}); 
