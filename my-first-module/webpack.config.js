module.exports = {
  entry: './app.js',
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'dist.js'
  }, 
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'}
    ]
  }
};
