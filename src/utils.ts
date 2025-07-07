import { LOCALES } from "./constants";

export function getLocaleParams() {
  return LOCALES.map((locale) => ({ params: { locale } }));
}
