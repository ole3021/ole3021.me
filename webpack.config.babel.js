import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const plugins = [
  new ExtractTextPlugin('./bundle.css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
    }
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  }))
}

export default {
  context: __dirname,
  entry: {
    jsx: './index.jsx',
    css: './assets/sass/app.scss'
  },
  output: {
    path: `${__dirname}/build/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader?sourceMap', 'sass-loader?sourceMap'])
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins,
  devServer: {
    port: 4999,
    colors: true,
    hot: true,
    historyApiFallback: {
      index: './index.html'
    }
  }
}
