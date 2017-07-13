const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
    // publicPath: '/'
  },
  devServer: {
    contentBase: './public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    color: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=20000&name=images/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  // module: {
  //   preLoaders: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       loader: 'eslint-loader'
  //     }
  //   ],
  //   loaders: [
  //     {
  //       test: /\.jsx?$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader'
  //     },
  //     {
  //       test: /\.(png|jpg|jpeg|gif)$/,
  //       loader: 'url-loader?limit=20000&name=images/[name].[ext]'
  //     },
  //     {
  //       test: /\.scss$/,
  //       loader: 'style-loader!css-loader!sass-loader'
  //     }
  //   ]
  // },
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          new webpack.optimize.DedupePlugin(),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production')
            }
          }),
          new webpack.optimize.UglifyJsPlugin()
        ]
      : []
};
