import React, { createContext, useContext } from "react";
import type { PageContext } from "vike/types";

export { PageContextProvider };
export { usePageContext };

const Context = createContext<PageContext>(undefined as unknown as PageContext);

function PageContextProvider({
  pageContext,
  children,
}: { pageContext: PageContext; children: React.ReactNode }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  return useContext(Context);
}
