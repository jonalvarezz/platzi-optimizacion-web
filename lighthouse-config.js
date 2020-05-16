module.exports = {
  extends: 'lighthouse:default',
  settings: {
    extraHeaders: '{"Cookie": "authinfo=1234567"}',
  },
}
