import webpack from 'webpack'

export default {
  context: __dirname,
  entry: './index.jsx',
  output: {
    path: `${__dirname}/__build__/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: (() => {
    if (process.argv.indexOf('-p') !== -1) {
      return [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          output: {
            comments: false
          }
        })
      ]
    }
    return []
  })(),
  devServer: {
    port: 4999,
    colors: true,
    historyApiFallback: {
      index: './index.html'
    }
  }
}
