// Centralised SEO helpers. Each page calls `pageMetadata()` with its own unique
// content, so metadata is never copied between pages while boilerplate (Open
// Graph, Twitter, canonical, custom browser tags) stays DRY and consistent.

export const SITE_URL = "https://onlineatlas.vercel.app";
export const BRAND = "ATLAS SkillTech University";
export const SITE_NAME = "ATLAS Online — ATLAS SkillTech University";
export const THEME_COLOR = "#16285c";

/**
 * Build a complete, page-specific metadata object.
 * Site-wide fields (authors, robots, theme-color, apple/MS tags) live in the
 * root layout and are inherited; this fills in everything that must be unique
 * per route.
 */
export function pageMetadata({ title, description, path, image, imageAlt, keywords }) {
  const absoluteUrl = `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    // Custom tags the Metadata API has no first-class field for. Re-declares the
    // MS browser tags so they survive this page's `other` override.
    other: {
      "msapplication-navbutton-color": THEME_COLOR,
      "msapplication-TileColor": THEME_COLOR,
      "twitter:url": absoluteUrl,
    },
  };
}
