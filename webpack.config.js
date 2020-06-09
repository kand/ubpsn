var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  entry: './src/entry.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist', 'static'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.s[ac]ss/i,
      use: [
        // fallback to style-loader in development
        process.env.NODE_ENV !== 'production'
          ? 'style-loader'
          : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/,
      loader: 'url-loader',
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader',
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'styles.css'}),
  ]
};
