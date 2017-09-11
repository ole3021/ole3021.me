import webpack from 'webpack'
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
    'bundle.js': './index.jsx',
    'bundle.css': './assets/less/main.less'    
  },
  output: {
    path: `${__dirname}/build/`,
    filename: '[name]'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins,
  devServer: {
    port: 3021,
    hot: true,
    historyApiFallback: {
      index: './index.html'
    }
  }
}
