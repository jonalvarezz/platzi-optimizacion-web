module.exports = {
  extends: 'lighthouse:default',
  settings: {
    extraHeaders: { Cookie: 'authinfo=hehe-much-secure' },
  },
}
