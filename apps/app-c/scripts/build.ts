"use strict";

import path from "path";
import webpack from "webpack";
import rimraf from "rimraf";
// @ts-expect-error
import ReactServerWebpackPlugin from "react-server-dom-webpack/plugin";

const isProduction = process.env.NODE_ENV === "production";
rimraf.sync(path.resolve(__dirname, "../build"));
webpack(
  {
    mode: isProduction ? "production" : "development",
    // devtool: isProduction ? "source-map" : "cheap-module-source-map",
    entry: [path.resolve(__dirname, "../src/page.tsx")],
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [new ReactServerWebpackPlugin({ isServer: false })],
  },
  (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.message) {
        console.error(err.message);
      }
      process.exit(1);
    }

    if (stats === undefined) {
      throw new Error("stats is undefined");
    }

    const info = stats.toJson();
    if (stats.hasErrors()) {
      console.log("Finished running webpack with errors.");
      info.errors?.forEach((e) => console.error(e));
      process.exit(1);
    } else {
      console.log("Finished running webpack.");
    }
  }
);
