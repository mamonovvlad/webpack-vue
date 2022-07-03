// Build config:
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  // PRODUCTION MODE
  mode: "production",
  devtool: false,
  plugins: [],
});

