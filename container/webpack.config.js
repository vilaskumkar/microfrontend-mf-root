const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    port: 8080
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mfeReact: 'mfeReact@http://localhost:8081/remoteEntry.js',
        mfeAngular: 'mfeAngular@http://localhost:8082/remoteEntry.js',
        mfeVue: 'mfeVue@http://localhost:8083/remoteEntry.js'
      }
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};
