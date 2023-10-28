// ! show menu
const   navMenu = document.getElementById("nav_menu"),
        navToggle = document.getElementById("nav_toggle"),
        navClose = document.getElementById("nav_close")
// show menu
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show_menu");
    });
}
// remove menu
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show_menu");
    });
}
// !  remove moble menu
const navLink = document.querySelectorAll(".nav_link")
const linkAction = ()=>{
    navMenu.classList.remove("show_menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// ! projects swiper
let swiperProjects = new Swiper(".projects_container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
  })
// ! comments swiper
let swiperComments = new Swiper(".comments_container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
})
// ! email sender
const   contactForm = document.getElementById("contact_form"),
        contactName = document.getElementById("contact_name"),
        contactEmail =   document.getElementById("contact_email"),
        contactProject = document.getElementById("contact_textarea"),
        contactMessage = document.getElementById("contact_message")
const sendEmail = (e) => {
    e.preventDefault()
    // check empty
    if(contactName.value==="" || contactEmail.value==="" || contactProject===""){}
    else{
        // server id , template id , form id , public key (emailjs)
        emailjs.sendForm('service_4allfqx','template_l4glkdk','#contact_form','U82Uzo5hP4cvC1kmS')
        .then(()=>{
            // show message and add color
            contactMessage.classList.add("color_blue")
            contactMessage.textContent = "message sent ✔"
            // remove message after 5s
            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000)
        },(error)=>{
            alert("OOPS! shomething has failed....", error)
        })
        // clear form
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)
// ! scoll actiove link
// select all sections id
const sections = document.querySelectorAll("section[id]")
// add active-link class while scrolling
const scrollActive = ()=>{
    // get scrallY value 
    const scrollY = window.pageYOffset
    // check where scroll currently is
    sections.forEach(current =>{
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active_link")
        }else{
            sectionsClass.classList.remove("active_link")
        }
    })
}
window.addEventListener('scroll', scrollActive)
// ! show scroll up
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll_up')
    this.scrollY >= 350? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)
// ! theme
const   themeButton = document.getElementById("theme_button"),
        darkTheme = "dark_theme",
        iconTheme = "ri-sun-line"
// saved theme
const   selectedTheme = localStorage.getItem("selected_theme"),
        selectedIcon = localStorage.getItem("selected_icon")
// check theme
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"
// set old theme
if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme)
}
// activte deactivate theme
themeButton.addEventListener('click', ()=>{
    // add remove
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save theme
    localStorage.setItem("selected_theme", getCurrentTheme())
    localStorage.setItem("selected_icon", getCurrentIcon())
})
// ! change background header
const scrollHeader = () =>{
    const header = document.getElementById('header') 
    this.scrollY >= 50 ? header.classList.add("bg_header") : header.classList.remove("bg_header")
}
window.addEventListener('scroll', scrollHeader)
// ! scroll animation
const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2500,
    delay: 400,
})
sr.reveal(".home_data, .projects_container, .comments_container, .footer_container")
sr.reveal(".home_info", {delay:600,origin:"bottom",interval:100})
sr.reveal(".skills_content:nth-child(1), .contact_content:nth-child(1)", {origin:"left"})
sr.reveal(".skills_content:nth-child(2), .contact_content:nth-child(2)", {origin:"right"})
sr.reveal(".qualification_content, .services_card", {interval:100})