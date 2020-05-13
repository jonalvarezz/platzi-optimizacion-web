/**
 * Oh you curious human,
 * Ya que estás aquí: Nunca hagas esto en una app *real*
 * Happy hacking :)
 */

const SESSION_KEY = 'authinfo'

export const isLoggedIn = () => {
  const authLocal = window.localStorage.getItem(SESSION_KEY)
  const authCookie = document.cookie.match(SESSION_KEY) // CI

  return authLocal || authCookie != null
}

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

const protectedRoutes = ['/']
const isProtectedRoute = path => protectedRoutes.includes(path)
export const withRouteProtection = (redirection = '/login') => {
  if (!isProtectedRoute(window.location.pathname)) {
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
