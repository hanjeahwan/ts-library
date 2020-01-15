import { config, plugins, resolveFile } from "./rollup.config";
import serve from "rollup-plugin-serve";

export default {
  ...config,
  plugins: [
    ...plugins,
    serve({
      port: 3001,
      contentBase: [resolveFile(["example"]), resolveFile(["dist"])]
    })
  ]
};
