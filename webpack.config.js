const path = require('path');
const multi = require('multi-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'./public/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {test:/\.css$/,use:["style-loader","css-loader"]}
    ]
  }
};