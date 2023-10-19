const path = require("path");

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      type: "module",
    },
  },
  externals: Object.keys(require("./package.json").peerDependencies),
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.([jt]sx?)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
