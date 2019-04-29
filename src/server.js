import App from "./App";
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import { ChunkExtractor } from "@loadable/server";
import { ServerStyleSheet } from "styled-components";
import path from "path";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    let staticContext = {};
    const extractor = new ChunkExtractor({
      statsFile: path.resolve("build/loadable-stats.json"),
      entrypoints: ["client"]
    });

    const sheet = new ServerStyleSheet();

    const jsx = extractor.collectChunks(
      sheet.collectStyles(
        <ServerLocation url={req.url}>
          <App />
        </ServerLocation>
      )
    );

    const markup = renderToString(jsx);
    const styleTags = sheet.getStyleTags();

    res.send(
      // prettier-ignore
      `<!doctype html>
        <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>Welcome to Razzle</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${styleTags}
        </head>
        <body>
          <div id="root">${markup}</div>
          ${extractor.getScriptTags()}
        </body>
        </html>`
    );
  });

export default server;
