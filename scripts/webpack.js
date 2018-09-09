const path = require('path')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PROD = 'production'
const mode = process.env.NODE_ENV === PROD ? PROD : 'development'
const isDev = mode !== PROD

module.exports = {
  mode,
  devtool: isDev ? 'eval-source-map' : false,
  entry: {
    app: './src/index.tsx'
  },
  output: {
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'cache-loader' },
          {
            loader: 'thread-loader',
            options: {
              workers: require('os').cpus().length - 1 // there should be 1 cpu for the fork-ts-checker-webpack-plugin
            }
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true // IMPORTANT! use happyPackMode mode to speed-up compilation and reduce errors reported to webpack
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: 'js/[name].[chunkhash:8].js.map',
      include: /app/
    })
  ],
  devServer: {
    contentBase: './public',
    compress: true,
    stats: 'minimal'
  },
  performance: {
    hints: isDev ? false : 'warning'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors'
    }
  }
}
