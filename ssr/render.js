const h = require('hyperscript')
const { fetchPopular, fetchHighestRated, fetchTrending } = require('./api')
const CarouselItem = require('./CarouselItem')

/**
 * Render home contents
 * @return {Promise<string>}
 */
async function render() {
  const [trending, popular, highestRated] = await Promise.all([
    fetchTrending(),
    fetchPopular(),
    fetchHighestRated(),
  ])

  const html = h(
    'section',
    SectionTitle('Trending Anime'),
    Carousel({
      itemsList: trending,
    }),
    SectionTitle('Highest Rated Anime'),
    Carousel({
      itemsList: highestRated,
    }),
    SectionTitle('Most Popular Anime'),
    Carousel({
      itemsList: popular,
    })
  )

  const htmlText = html.innerHTML

  return htmlText
}

const SectionTitle = title => h('h3.carousel__title', title)

const Carousel = ({ itemsList = [] }) =>
  h(
    'section.carousel',
    h(
      'div.carousel__container',
      itemsList.map(
        ({
          attributes: { titles, posterImage, slug, youtubeVideoId, startDate },
        }) =>
          CarouselItem({
            imageUrl: posterImage.medium,
            title: titles.en,
            subtitle: titles.ja_jp,
            slug,
            youtubeVideoId,
            startDate,
          })
      )
    )
  )

module.exports = render
