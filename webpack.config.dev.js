import webpack from 'webpack';
import path from 'path';

export default {
//  debug: true,
  devtool: 'cheap-module-eval-source-map',
//  noInfo: false,
  entry: [
    'eventsource-polyfill', //hotloading with IE ..
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist',//  with npm run build
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: ['babel-loader']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.eot(\?v=\d+\.\d+\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?orefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.d+\.d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}

    ]
  }
};

