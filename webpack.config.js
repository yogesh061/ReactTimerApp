var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './public/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery' : 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundel.js'
  },
  resolve:{
    root: __dirname,
    alias:{
      Main: 'public/components/Main.jsx',
      Navigation:  'public/components/Navigation.jsx',
      Timer:  'public/components/Timer.jsx',
      Countdown:  'public/components/Countdown.jsx',
      Clock:  'public/components/Clock.jsx',
      applicationStyles: 'public/styles/app.scss'
    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'inline-source-map'
}
