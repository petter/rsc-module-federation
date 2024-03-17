"use client";
import { use } from "react";
import { createFromFetch } from "react-server-dom-webpack/client";

export function MicroFrontend({ url }) {
  console.log("hello from ");
  const content = createFromFetch(fetch(url));

  return use(content);
}
