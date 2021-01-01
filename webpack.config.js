module.exports = {
  entry: './assets/js/main.js',
  output: {
    path: __dirname + './assets/js',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
        query:{
          presets:['es2015']
        }
      }
    ]
  }
}