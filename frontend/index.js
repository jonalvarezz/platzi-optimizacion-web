import lozad from 'lozad'
import modalListener from './modal'

!(function(document) {
  // Add lazy loading
  const carouselImages = document.querySelectorAll('.carousel-item__img')
  const observer = lozad(carouselImages)
  observer.observe()

  // Add modal listener
  document.body.addEventListener('click', modalListener)
})(document, window)
