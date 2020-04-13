const path = require('path')

const nodeEnv = process.env.NODE_ENV || 'development'
const shouldAnalyze = process.argv.includes('--analyze')

const plugins = []

if (shouldAnalyze) {
  const { BundleAnalyzerPlugin } = module.require('webpack-bundle-analyzer')
  plugins.push(new BundleAnalyzerPlugin())
}

const config = {
  mode: nodeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '.',
  },
  plugins,
}

module.exports = config
