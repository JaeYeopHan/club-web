import React from "react";
import type { PageContext } from "vike/types";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <nav>
            <a className="navitem" href="/">
              Home
            </a>
          </nav>
          {children}
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 1024,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}
