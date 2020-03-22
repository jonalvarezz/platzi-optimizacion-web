import h from 'hyperscript'

const Controls = ({ slug }) =>
  h(
    'div',
    h('img.carousel-item__details--img', {
      src: 'assets/play-icon.png',
      alt: 'Play',
    }),
    h(
      'a',
      {
        href: `https://kitsu.io/explore/anime/${slug}`,
        title: 'See more',
        target: '_blank',
      },
      h('img.carousel-item__details--img', {
        src: 'assets/plus-icon.png',
        alt: 'More info',
      })
    )
  )

const CarouselItem = ({ imageUrl, title, subtitle, slug }) =>
  h(
    'div.carousel-item',
    h('img.carousel-item__img', { src: imageUrl, alt: '' }),
    h(
      'div.carousel-item__details',
      Controls({ slug: slug }),
      h('p.carousel-item__details--title', title),
      h('p.carousel-item__details--subtitle', subtitle)
    )
  )

export default CarouselItem
