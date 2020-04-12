import h from 'hyperscript'
import moment from 'moment'

const relativeDate = dateStr => moment(dateStr, 'YYYY-MM-DD').fromNow()

const Controls = ({ slug, youtubeVideoId }) =>
  h(
    'div',
    h(
      'a',
      {
        href: `https://www.youtube.com/watch?v=${youtubeVideoId}`,
        title: 'Watch trailer',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.carousel-item__details--img', {
        src: 'assets/play-icon.png',
        alt: 'Play',
      })
    ),
    h(
      'a',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
        rel: 'noreferrer',
      },
      h('img.carousel-item__details--img', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({
  imageUrl,
  title,
  subtitle,
  slug,
  youtubeVideoId,
  startDate,
}) =>
  h(
    'div.carousel-item',
    h('img.carousel-item__img', { src: imageUrl, alt: '' }),
    h(
      'div.carousel-item__details',
      Controls({ slug, youtubeVideoId }),
      h('p.carousel-item__details--title', title),
      h('p.carousel-item__details--subtitle', subtitle),
      h(
        'p.carousel-item__details--date',
        `Released: ${relativeDate(startDate)}`
      )
    )
  )

export default CarouselItem
