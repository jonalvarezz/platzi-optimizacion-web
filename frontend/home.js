import lozad from 'lozad'
import { handleLogout, withRouteProtection } from './auth'
import modalListener from './modal'

!(function(document) {
  handleLogout()
  withRouteProtection()

  // Add lazy loading
  const carouselImages = document.querySelectorAll('.carousel-item__img')
  const observer = lozad(carouselImages)
  observer.observe()

  // Add modal listener
  document.body.addEventListener('click', modalListener)
})(document, window)
