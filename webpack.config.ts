import * as path from 'path'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
// import TsconfigPathsPlugin from 'tsconfig-paths';
import { Configuration as WebpackConfiguration } from "webpack"
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server"

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
  // mode: "production", 圧縮効率の高い本番用
  mode: "development",
  entry: {
    popup: `${__dirname}/src/App.tsx`,
    background: `${__dirname}/src/background/background.ts`,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: {
          loader: "ts-loader",
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'  // Loader to use for js and jsx files
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "components*": path.resolve(__dirname, "src/components*"),
    },
  },
  output: {
    filename: "[name].js",
    path: `${__dirname}/dist`,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/popup.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/popup.html", to: "./src/" },
        { from: "./src/assets/earth-48px.png", to: "./src/assets/" },
        { from: "./src/assets/earth-32px.png", to: "./src/assets/" },
        { from: "./manifest.json", to: "./" }
      ]
    })
  ],
  target: ["web", "es5"],
}

export default config;