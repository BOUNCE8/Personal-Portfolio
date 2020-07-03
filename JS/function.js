new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'forthPage'],
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        // const heroTitle = section.querySelector('#heroTitle');
        // const heroText = section.querySelector('.hero-title-text');
        
        // const tl = new TimelineMax({delay: 0.2});
        // const t2 = new TimelineMax({delay: 0.6});
        
        // tl.fromTo(heroTitle,0.5, {y:'-50', opacity: 0}, {y:0, opacity: 1})
        // .fromTo(heroText, 0.5, {opacity: 0}, {opacity: 1})

    }
});

// Hamburger - Drop down menu function
const hamburger = document.querySelector('#hamburger');
const dropDownMenu = document.querySelector('.sticky-nav-container')
    
    hamburger.addEventListener('click', dropDownMenuAnimation)
        function dropDownMenuAnimation(){
            dropDownMenu.classList.toggle('openBurgerMenu')
                }

                dropDownMenu.addEventListener('click', () => {
                    dropDownMenu.classList.toggle('openBurgerMenu');
                });   
// Hamburger - Drop down menu function

// Contact Form - contact form function - START

const contactBtn = document.querySelector('#contactBtn');
const contactForm = document.querySelector('.contactContainer');
const closeBtn = document.querySelector('.closeBtn');

function showContactForm() {
    contactBtn.addEventListener('click', function(){
        contactForm.style.visibility = "visible";
    })
}

function closeContactForm() {
    closeBtn.addEventListener('click', function(){
        contactForm.style.visibility = "hidden";
    })
}

showContactForm()
closeContactForm()

// Contact Form - contact form function - END

// my work page: modal functions
const projectImage = document.querySelector('.project-image')
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modalCloseBtn');
const allProjects = document.querySelectorAll('.project-container .project .project-image');
let option1 = document.querySelector('#projectImage-1-modal');
let option2 = document.querySelector('#projectImage-2-modal');
let option3 = document.querySelector('#projectImage-3-modal');
let selectedProject = "-modal";


for(project of allProjects){
    project.addEventListener('click', function(){
        let currentProject = `${this.id}`+`${selectedProject}`;
        
        modal.style.display = "flex";
        if (currentProject === "projectImage-1-modal") {
            option1.style.display = "flex";
        } else if (currentProject === "projectImage-2-modal"){
            option2.style.display = "flex";
        }   else {
            option3.style.display = "flex";
        }
    })
}

window.addEventListener('click', clickOutside);

function clickOutside(e){
    if (e.target == modal) {
        modal.style.display = "none";
        option1.style.display = "none";
        option2.style.display = "none";
        option3.style.display = "none";
    }
}

modalCloseBtn.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = "none";
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
}

projectImage.addEventListener('click', openModal);
function openModal() {
    modal.style.display = "flex";
}













