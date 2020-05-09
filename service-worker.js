const CACHE_NAME = 'app-v1'

self.addEventListener('fetch', myCustomFetch)
self.addEventListener('activate', clearCache)

function myCustomFetch(event) {
  const response = cacheOrFetch(event)
  event.respondWith(response)
}

async function cacheOrFetch(event) {
  // event.request contiene la informacion del request, i.e.: la url
  // 1. Verificar la respuesta que necesitamos ya se encuentra en el cache
  let response = await caches.match(event.request)

  // 2. Si es cierto, retornamos la respuesta desde el cache > end
  if (response) {
    return response
  }

  // 3. Si no, hacemos un fetch al servidor para obtener la respuesta
  response = await fetch(event.request)
  // 3.1 Si la respuesta no es valida > end
  if (
    !response ||
    response.status !== 200 ||
    response.type !== 'basic' ||
    !isAssetCSS(event.request.url)
  ) {
    return response
  }

  // 4. Cuando tengamos la respuesta devuelta del servidor, la almacenamos
  //    en el cache para proximas respuestas.
  const clonedResponse = response.clone() // Stream que solo se puede leer una vez
  caches.open(CACHE_NAME).then(cache => {
    cache.put(event.request, clonedResponse)
  })

  return response
}
const assetsRegExp = /.png|.gif|.jpg|.jpeg|.css|.js/g
function isAssetCSS(url) {
  return assetsRegExp.test(url)
}

function clearCache(event) {
  const deletePromise = caches.delete(CACHE_NAME)
  event.waitUntil(deletePromise)
}
