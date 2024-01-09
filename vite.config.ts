import react from "@vitejs/plugin-react";
import path from "path";
import vike from "vike/plugin";
import { UserConfig } from "vite";
import vercel from 'vite-plugin-vercel';

const config: UserConfig = {
  plugins: [react(), vike(), vercel()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
    },
  },
};

export default config;
