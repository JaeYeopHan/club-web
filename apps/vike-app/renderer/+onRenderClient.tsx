export { onRenderClient };

import { hydrateRoot } from "react-dom/client";
import type { OnRenderClientAsync } from "vike/types";
import "~/app/globals.css";
import { PageShell } from "./PageShell";

const onRenderClient: OnRenderClientAsync = async (
  pageContext,
): ReturnType<OnRenderClientAsync> => {
  const { Page, pageProps } = pageContext;

  if (!Page) {
    throw new Error(
      "Client-side render() hook expects pageContext.Page to be defined",
    );
  }

  const root = document.getElementById("react-root");

  if (!root) {
    throw new Error("DOM element #react-root not found");
  }

  hydrateRoot(
    root,
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  );
};
