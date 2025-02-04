$('.owl-carousel').owlCarousel({
       loop: true,
       margin: 10,
       responsiveClass: true,
       items: 1
})


let header = document.getElementById('header');
document.addEventListener('scroll', () => {
       if (window.scrollY > 15) {
              header.classList.add('scroll')
       }else{
              header.classList.remove('scroll')
       }
})
console.log(header)