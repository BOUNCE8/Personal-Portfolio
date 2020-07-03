new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'forthPage'],
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        const heroTitle = section.querySelector('#heroTitle');
        const heroText = section.querySelector('.hero-title-text');
        
        // const projectImages = document.querySelectorAll('.project-image');
        // const socialIcons = document.querySelectorAll('.social-icon');
        
        const tl = new TimelineMax({delay: 0.2});
        const t2 = new TimelineMax({delay: 0.6});
        // const t3 = new TimelineMax({delay: 0.6});
        // const t4 = new TimelineMax({delay: 1});
        // const t5 = new TimelineMax({delay: 1});
        // const t6 = new TimelineMax({delay: 1.4});
        // const t7 = new TimelineMax({delay: 1.4});
        
        tl.fromTo(heroTitle,0.5, {y:'-50', opacity: 0}, {y:0, opacity: 1})
        .fromTo(heroText, 0.5, {opacity: 0}, {opacity: 1})

        // Recent Work Page


        // Replace Current animation with hover on / off when each project is highlighted
        // if(destination.index === 1) {
        //     const projectInfo = document.querySelectorAll('.project-text');
        //     t2.fromTo(projectInfo, 0.6, {y:"0"}, {y: "175"});
        // }
        // Replace Current animation with hover on / off when each project is highlighted
    }
});




// document.querySelectorAll('.project-image').addEventListener("mouseover", function() {
//     console.log("Guiltyyyyyyy")
// });
// const projectImages = document.querySelectorAll('.project-image');

// projectImages.forEach(proImage => proImage.addEventListener('click', function() {
    
//     TweenMax.to(proImage, 0.5, {x: '-300px'})
    // Close but need to figure out how to seperate the animations when clicked
    // if (this.style.transform = "translate(0px, 0px)") {
    //     gsap.from(proImage, 0.5, {x: '-300px'}) 

    //     } else if (this.style.transform = "translate(-300px, 0px)") {
    //         gsap.to(proImage, 0.5, {x: '300px'}) 
    //     } else {
    //         console.log("ahoyyyy")
    //     }
//     }
// ));
// projectImages.forEach(proImage => proImage.addEventListener('click', function() {
//     TweenMax.to(proImage, 0.5, {x: '300px'})
    
// }));

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













