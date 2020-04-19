import ModalVideo from 'modal-video'
import 'modal-video/css/modal-video.min.css'

/**
 * Open a video modal with the given Youtube's video Id
 * @param {String} videoId YouTube Video Id
 */
const openVideoModal = videoId => {
  // Hacky workaround to trigger the modal-video library
  // given its poor API.
  // Academic purposes only, pick a better lib for your
  // real life projects :)
  let dummyBtn = document.createElement('button')
  dummyBtn.dataset.videoId = videoId
  new ModalVideo([dummyBtn])
  dummyBtn.click()
  // dispose
  dummyBtn = null
}

export default openVideoModal
