const path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: path.join(__dirname, "/app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: [require.resolve('babel-preset-es2015')]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
