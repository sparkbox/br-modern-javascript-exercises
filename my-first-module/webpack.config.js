module.exports = {
  entry: './app.js',
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'dist.js'
  }, 
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }]
      }
    ]
  }
};
