/**
 * Open a video modal when an <a.js-modal> element is _clicked_
 * The modal library, and its styles, are lazy loaded.
 * @param {EventListener} event
 * @see https://webpack.js.org/guides/lazy-loading/
 */
const modalListener = event => {
  const element = event.target
  const linkElement = getVideoLinkElement(element)
  if (linkElement == null) {
    return 0
  }

  event.preventDefault()
  const videoUrl = linkElement.dataset.videoid

  import(/* webpackChunkName: "modal" */ './open').then(
    ({ default: openVideoModal }) => {
      openVideoModal(videoUrl)
    }
  )

  return 1
}

/**
 * Look up for a A element with a 'js-modal' class.
 * That element contains our videoid attribute.
 *
 * Heuristic:
 * - Assumes markup as <a.js-modal><img></a>
 * - This is meant to be used from a click event
 * - The click event will likely happen in the <img> child
 * - Therefore, if the given element is neither an <img> or <a>, abort.
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement|null} The A element or null if not found
 * @see CarouselItem.js
 */
function getVideoLinkElement(element) {
  if (!['IMG', 'A'].includes(element.tagName)) {
    return null
  }

  if (element.tagName === 'A' && element.classList.contains('js-modal')) {
    return element
  }

  return getVideoLinkElement(element.parentElement)
}

export default modalListener
