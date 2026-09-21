import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { SITE_URL, seoPages, renderSeoHead } from "./lib/seo";

export function render(pathname: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const output = new PassThrough();
    let html = "";
    output.on("data", chunk => { html += chunk.toString(); });
    output.on("end", () => resolve(html));
    output.on("error", reject);
    const stream = renderToPipeableStream(<StaticRouter location={pathname}><App /></StaticRouter>, {
      onAllReady() { stream.pipe(output); },
      onShellError: reject,
      onError: reject,
    });
  });
}
