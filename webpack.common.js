const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ImageConfigWebpackPlugin = require("image-config-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "swc-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    fallback: {
      util: require.resolve("util/"),
      assert: require.resolve("assert/"),
      process: require.resolve("process/browser"),
      stream: require.resolve("stream-browserify"),
      zlib: require.resolve("browserify-zlib"),
      buffer: require.resolve("buffer"),
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new ImageConfigWebpackPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
