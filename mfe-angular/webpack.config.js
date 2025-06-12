const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: "angular2-template-loader",
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfeAngular",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/main.ts",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
