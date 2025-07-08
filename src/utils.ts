import type { GetStaticPathsResult } from "astro";
import { LOCALES } from "./constants";

export function getLocaleParams(): GetStaticPathsResult {
  return LOCALES.map((locale) => ({ params: { locale } }));
}
