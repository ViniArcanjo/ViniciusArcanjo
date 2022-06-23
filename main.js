/* Toggles menu when there is a click on the icons: hamburguer & X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Hides the menu tab when there is a click on one of his links */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Adds a shadow to the page header when there is a scroll action */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function shadowToHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Shows back-to-top button when the scrolling action passes home section's heigt */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 1060) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Keeps the sections link active wile on the equivalent section */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  pagination: {
    el: '.swiper-pagination'
  },

  mousewheel: true,
  keyboard: true,

  breakpoints: {
    762: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* scrollReveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#skills header, #skills .card1, #skills .card2, #skills .card3,
#projects .image, #projects .text,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links
footer .brand, footer .social
`,
  { interval: 100 }
)

/*Function that makes "scrollY" functions work*/

window.addEventListener('scroll', function () {
  shadowToHeaderWhenScroll(), backToTop(), activateMenuAtCurrentSection()
})
