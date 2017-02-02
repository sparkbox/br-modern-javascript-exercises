module.exports = {
  entry: './app.js',
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
