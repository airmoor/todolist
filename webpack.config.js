const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.resolve(__dirname, '.', 'bundle'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: 'babel-loader' 
      },
      {
        test: /\.css$/,
        use: ['style-loader',
        'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html" 
    })
  ],
  devServer: {
    contentBase: "./bundle",
    hot: true,
    port:3000
  }
};
