const firstNavbar = document.querySelector('.first-navbar')
const secondNavbar = document.querySelector('.second-navbar')
const toggleMode = document.querySelector('.toggleMode')
const navbar = document.querySelector('.navs')
const searchField = document.querySelector('.searchField')
const searchInput = document.querySelector('.search_input')

window.addEventListener('scroll', () => {
  const firstNavbarPosition = firstNavbar.getBoundingClientRect().top

  if (firstNavbarPosition < 0) {
    secondNavbar.style.position = 'fixed';
    secondNavbar.style.top = '0'
  } else {
    secondNavbar.style.position = 'relative'
    secondNavbar.style.top = 'auto'
  }
})

toggleMode.addEventListener('click', () => {
  navbar.classList.toggle('dark')
})

searchField.addEventListener('click', () => {
  searchInput.classList.toggle('not-active')
})


