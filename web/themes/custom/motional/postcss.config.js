const autoPrefixer = require('autoprefixer')

module.exports = {
  parser: 'postcss-scss',
  plugins: [autoPrefixer()],
}
