module.exports = {
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    extensions: ['.js']
  },
  entry: {
    'main/index': './src/main/index.js',
    'renderer/app': './src/renderer/app.js',
  },
  output: {
    filename: 'dist/[name].js'
  },
  devtool: 'source-map'
};
