var webpack = require('webpack');  
module.exports = {  
  entry: "./React/app.jsx",
  output: {
    path: __dirname + '/static',
    filename: "bundle.React"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ]
};
