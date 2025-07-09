import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const people = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/people" }),
  schema({ image }) {
    return z.object({
      name: z.string(),
      country: z.string().optional(),
      groups: z.array(z.enum(["international", "local", "core", "founders"])),
      photo: image(),
      subtitle: z.string().optional(),
      positions: z.array(z.string()).optional(),
      socials: z.array(z.string().url()).optional(),
    });
  },
});

export const internationalOrder = {
  "subin-pinkayan": 1,
  "suh-nam-pyo": 2,
  "chairul-tanjung": 3,
  "ching-man-ho": 4,
  "jan-kavan": 5,
  "louis-cheung": 6,
  "om-prakash-bhatt": 7,
  "loic-fauchon": 8,
  "ben-shenglin": 9,
  "pablo-bereciartua": 10,
  "marsha-vande-berg": 11,
  "sir-david-wright": 12,
  "abdulrahmaan-murtadha-al-ansaari": 13,
  "han-seung-soo": 14,
};

export const foundersOrder = {
  "han-seung-soo": 1,
  "kim-young-kun": 2,
};

export const localOrder = {
  "min-sunshik": 1,
  "choi-jong-moon": 2,
  "yang-chang-young": 3,
  "yoo-seung-gack": 4,
  "ko-kwang-hee": 5,
  "ha-jae-yeol": 6,
  "lee-hee-jo": 7,
  "won-bong-hee": 8,
  "park-seung-gyun": 9,
  "huh-in-koo": 10,
  "lee-sang-chan": 11,
};
