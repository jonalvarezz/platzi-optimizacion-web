/**
 * Oh you curious human,
 * Ya que estás aquí: Nunca hagas esto en una app *real*
 * Happy hacking :)
 */

const SESSION_KEY = 'authinfo'

export const isLoggedIn = () => window.localStorage.getItem(SESSION_KEY)

export const login = event => {
  if (event) {
    event.preventDefault()
  }
  window.localStorage.setItem(SESSION_KEY, new Date().getTime())
  window.location = '/'
}

export const logout = event => {
  if (event) {
    event.preventDefault()
  }
  window.localStorage.removeItem(SESSION_KEY)
  window.location = '/login'
}

export const withRouteProtection = (redirection = '/login') => {
  if (window.location.pathname.startsWith(redirection)) {
    return 1
  }

  const isUserLogged = isLoggedIn()

  if (!isUserLogged) {
    window.location = redirection
    return 0
  }

  return 1
}

export const handleLogin = () => {
  const loginForm = document.querySelector('.js-login')
  if (!loginForm) {
    return 1
  }

  loginForm.addEventListener('submit', login)
}

export const handleLogout = () => {
  const logoutNode = document.querySelector('.js-logout')
  if (!logoutNode) {
    return 1
  }

  logoutNode.addEventListener('click', logout)
}
