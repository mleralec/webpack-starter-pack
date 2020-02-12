const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const minifyHTMLOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};

module.exports = env => ({
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: env.NODE_ENV === "production" ? minifyHTMLOptions : null
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
});
