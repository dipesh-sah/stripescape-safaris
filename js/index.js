$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  items: 1
})

let header = document.getElementById('header');
document.addEventListener('scroll', () => {
  if (window.innerWidth > 1023) {
    if (window.scrollY > 15) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  } else {
    header.classList.remove('scroll');
  }
});

let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let cross = document.getElementById('cross');
menu.addEventListener('click', () => {
  nav.classList.toggle('active')
})
cross.addEventListener('click', () => {
  nav.classList.remove('active')
})

let footer = document.querySelectorAll('.col');
 
function addToggleIcons() {
  let footer = document.querySelectorAll('.col');

  footer.forEach(item => {
    let existingIcon = item.querySelector('.icon'); 
    if (window.innerWidth <= 790) {
      if (!existingIcon) {
        let toggleIcon = document.createElement('span');
        toggleIcon.classList.add('icon');
        toggleIcon.innerHTML = '+'; 
        item.appendChild(toggleIcon);

        item.addEventListener('click', () => {
          item.classList.toggle('toggle');
          toggleIcon.innerHTML = item.classList.contains('toggle') ? '−' : '+';
        });
      }
    } else {
      if (existingIcon) {
        existingIcon.remove();  
      }
    }
  });
}

window.addEventListener('load', addToggleIcons);
window.addEventListener('resize', addToggleIcons);
