import type { PageContext } from "vike/types";
import meta from "~/app/meta";

export default (pageContext: PageContext) =>
  `Home | ${pageContext.exports.documentProps?.title ?? meta.siteTitle}`;
