import { withRouteProtection, handleLogin, handleLogout } from './login'

withRouteProtection()

!(function(document) {
  handleLogin()
  handleLogout()
})(document)
