import h from 'hyperscript'
import { fetchPopular, fetchHighestRated, fetchTrending } from './api'
import CarouselItem from './CarouselItem'

const SectionTitle = title => h('h3.categories__title', title)

const Carousel = ({ itemsList = [] }) =>
  h(
    'section.carousel',
    h(
      'div.carousel__container',
      itemsList.map(
        ({ attributes: { titles, posterImage, slug, youtubeVideoId } }) =>
          CarouselItem({
            imageUrl: posterImage.large,
            title: titles.ja_jp,
            subtitle: titles.en,
            slug,
            youtubeVideoId,
          })
      )
    )
  )

window.addEventListener('DOMContentLoaded', async () => {
  const mainSection = document.querySelector('.main')

  if (!mainSection) {
    return 0
  }

  const trending = await fetchTrending()
  const popular = await fetchPopular()
  const highestRated = await fetchHighestRated()

  mainSection
    .insertAdjacentElement('afterend', SectionTitle('Trending Anime'))
    .insertAdjacentElement(
      'afterend',
      Carousel({
        itemsList: trending,
      })
    )
    .insertAdjacentElement('afterend', SectionTitle('Highest Rated Anime'))
    .insertAdjacentElement(
      'afterend',
      Carousel({
        itemsList: highestRated,
      })
    )
    .insertAdjacentElement('afterend', SectionTitle('Most Popular Anime'))
    .insertAdjacentElement(
      'afterend',
      Carousel({
        itemsList: popular,
      })
    )
})
