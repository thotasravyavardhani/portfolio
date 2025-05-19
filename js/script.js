// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll=()=> {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height)
        {
            navlinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// Sticky navbar
let header=document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);

// remove toggle icon and navbar when click navbar link(scroll)
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
     distance: '80px',
     duration: 2000,
     delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed=new Typed('.multiple-text',{
    strings:['Java Programmer','Problem Solver','AI Enthusiaist'],
    typeSpeed:75,
    backSpeed:75,
    backDelay:1000,
    loop:true
});

const scriptURL = 'https://script.google.com/macros/s/AKfycby1tgGXK9e2JG3WZPV4wejkJto9XE-StghxpFzWTX9gR4IecBS-h3Sp_jcnWQI-ealoNQ/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
// Create a new div element for the custom cursor
function enlargeBlock(blockId, title, oldcontent, newcontent) {
    const block = document.getElementById(blockId);

    // Check if the block is already enlarged
    if (block.classList.contains('enlarged')) {
        // Restore the original state
        block.classList.remove('enlarged');
        block.innerHTML = `
            <i class='bx bx-code-alt'></i>
            <h3>${title}</h3>
            <p>${oldcontent}</p>
            <button class="btn read-more-btn" onclick="enlargeBlock('${blockId}', '${title}', '${oldcontent}', '${newcontent}')">Read More</button>
        `;
    } else {
        // Enlarge the block and show more content
        block.classList.add('enlarged');
        block.innerHTML = `
            <h3>${title}</h3>
            <p>${newcontent}</p>
            <button class="back-btn" onclick="enlargeBlock('${blockId}', '${title}', '${oldcontent}', '${newcontent}')">Back</button>
        `;
    }
}
