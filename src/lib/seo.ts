import type { Metadata } from "next";
import { absoluteUrl, site } from "@/data/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  /** Skip the "| Company" title template (home page already includes the name). */
  absoluteTitle?: boolean;
}

/** Consistent per-page metadata: title, description, canonical, Open Graph, Twitter. */
export function buildMetadata({ title, description, path, noIndex, absoluteTitle }: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
