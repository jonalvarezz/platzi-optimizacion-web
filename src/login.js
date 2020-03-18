/**
 * Oh you curious human,
 * Ya que estás aquí: Nunca hagas esto en una app *real*
 * Happy hacking :)
 */

const SESSION_KEY = 'logged'

export const isLoggedIn = () => window.localStorage.getItem(SESSION_KEY)

export const login = () =>
  window.localStorage.setItem(SESSION_KEY, new Date().getTime())

export const withRouteProtection = (redirection = '/login') => {
  if (window.location.pathname === redirection) {
    return 1
  }

  const isUserLogged = isLoggedIn()

  if (!isUserLogged) {
    window.location = redirection
    return 0
  }

  return 1
}
