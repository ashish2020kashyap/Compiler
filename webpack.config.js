const path= require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //plugins: [new MiniCssExtractPlugin()],
 
  entry: './config.js',
  output:{
      filename: 'app.js',
      path: path.resolve(__dirname,'public/javascripts'),

  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:"../stylesheets/app.css",
    }),
]

};