import config from '@vite-plugin-vercel/vike/config';
import type { Config } from "vike/types";

// https://vike.dev/config
export default ({
  /* To enable Client-side Routing:
  clientRouting: true,
  // !! WARNING !! Before doing so, read https://vike.dev/clientRouting */

  extends: config,
  // See https://vike.dev/data-fetching
  passToClient: ["pageProps", "urlPathname"],
} satisfies Config);
