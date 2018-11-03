import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/dist',//  with npm run build
    publicPath: '/',
    filename: 'pdp-bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyjsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
      {test: /\.eot(\?v=\d+\.\d+\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?orefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.d+\.d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.d+.\d+)?$/, laoder: 'url?limit=10000&mimetype=image/svg+xml'}

    ]
  }
};

