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
    port: 8082
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfeAngular',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App'
      }
    })
  ]
};
