import { withRouteProtection, handleLogin, handleLogout } from './login'

withRouteProtection()

window.addEventListener('DOMContentLoaded', () => {
  handleLogin()
  handleLogout()
})
