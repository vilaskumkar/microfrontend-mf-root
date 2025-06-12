const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  },
  devServer: {
    port: 8083
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeVue',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App'
      }
    })
  ]
};
