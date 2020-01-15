import { terser } from "rollup-plugin-terser";
import { config, plugins } from "./rollup.config";

export default {
  ...config,
  plugins: [...plugins, terser()]
};
