import type { GetStaticPathsResult } from "astro";
import { LOCALES } from "./constants";

export function getLocaleParams(): GetStaticPathsResult {
  return LOCALES.map((locale) => ({ params: { locale } }));
}

export function getIconNameFromUrl(href: string) {
  const iconMap = {
    linkedin: "linkedin-in",
    facebook: "square-facebook",
    instagram: "square-instagram",
    wiki: "wikipedia-w",
    twitter: "x-twitter",
    "x.com": "x-twitter",
  };

  for (const [key, value] of Object.entries(iconMap)) {
    if (href.includes(key)) {
      return `fa6-brands:${value}`;
    }
  }

  return "lucide:globe";
}
