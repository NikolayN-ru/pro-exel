const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.join(__dirname, "build"),
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@core": path.resolve(__dirname, "src/core"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/favicon.png"),
          to: path.join(__dirname, "build"),
        },
      ],
      options: {
        concurrency: 60,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[hash].css",
    }),
  ],
};
