// Development config:
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");


module.exports = merge(common, {
  // DEVELOPMENT MODE
  mode: "development",
  devtool: "inline-source-map",
  
  // DEV SERVER CONFIG
  devServer: {
    static: common.externals.paths.dist,
    // port: 8090,
    open: true,
    hot: true,
  },
  
});