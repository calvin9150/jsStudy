const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", // 실서비스 : production
  devtool: "eval", // 빠르게 하겠다는 뜻
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: {
    app: ["./client.jsx"],
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        option: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력
};
