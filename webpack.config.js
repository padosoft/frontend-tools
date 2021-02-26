const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "padosoft-frontend-tools.js",
    library: "padosoftFrontendTools",
    libraryTarget: "umd",
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
    jquery: {
      commonjs: "jQuery",
      commonjs2: "jQuery",
      amd: "jQuery",
      root: "$",
    },
    flatpickr: {
      commonjs: "flatpickr",
      commonjs2: "flatpickr",
      amd: "flatpickr",
      root: "flatpickr",
    },
    luxon: {
      commonjs: "luxon",
      commonjs2: "luxon",
      amd: "luxon",
      root: "luxon",
    },
  },
};
