module.exports = {
  extends: 'lighthouse:default',
  settings: {
    disableStorageReset: true,
    extraHeaders: { cookie: 'authinfo=hehe-much-secure' },
  },
}
