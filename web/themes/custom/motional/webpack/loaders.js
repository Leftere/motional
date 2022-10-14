const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const globImporter = require('node-sass-glob-importer')

const JSLoader = {
  test: /^(?!.*\.(stories|component)\.js$).*\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
}

const ImageLoader = {
  test: /\.(gif|jpe?g|mp4|png|svg|webp)$/,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
    outputPath: 'images/'
  },
}

const CSSLoader = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      //   url: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        // config: {
        //   path: path.resolve('.webpack/'),
        // }
        sourceMap: true,
      },
    },
    {
      loader: 'resolve-url-loader'
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          importer: globImporter(),
          outputStyle: 'compressed',
        },
      },
    },
  ],
}

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/,
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
}

const FontLoader = {
  test: /.(woff|woff2|ttf|eot|otf|svg)$/,
  type: 'javascript/auto',
  loader: 'file-loader',
  include: [/fonts/],
  options: {
    name: '../dist/fonts/[name].[ext]',
  },
}

module.exports = {
  JSLoader,
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
  FontLoader,
}
