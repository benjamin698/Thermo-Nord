import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

/**
 * Build a fully-formed Next.js Metadata object with proper canonical, OG and
 * Twitter tags. Use on every page.
 */
export function buildMetadata(input: SeoInput): Metadata {
  const url = `${siteConfig.url}${input.path ?? "/"}`;
  const image = input.image ?? "/og-default.png";
  const fullImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`;

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: input.type ?? "website",
      images: [{ url: fullImage, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime && { publishedTime: input.publishedTime }),
      ...(input.modifiedTime && { modifiedTime: input.modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [fullImage],
      ...(siteConfig.twitterHandle ? { creator: siteConfig.twitterHandle } : {}),
    },
  };
}

type BreadcrumbItem = { name: string; url: string };

const DAY_MAP = {
  Mo: "Monday",
  Tu: "Tuesday",
  We: "Wednesday",
  Th: "Thursday",
  Fr: "Friday",
  Sa: "Saturday",
  Su: "Sunday",
} as const;

type DayCode = keyof typeof DAY_MAP;

/**
 * LocalBusiness JSON-LD using the HVACBusiness subtype, optimal for a
 * chauffagiste. Includes address, geo, opening hours, aggregate rating and
 * service area — all the signals Google uses for local rich results.
 */
export function localBusinessJsonLd() {
  const a = siteConfig.contact.address;
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-default.png`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "€€",
    founder: { "@type": "Person", name: siteConfig.founder },
    foundingDate: siteConfig.foundingDate,
    vatID: siteConfig.legal.vat,
    taxID: siteConfig.legal.siret,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      postalCode: a.postalCode,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: a.latitude,
      longitude: a.longitude,
    },
    openingHoursSpecification: siteConfig.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days.map((d) => DAY_MAP[d as DayCode]),
      opens: slot.opens,
      closes: slot.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.value,
      reviewCount: siteConfig.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: siteConfig.serviceArea.cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  url: string;
};

export function serviceJsonLd(service: ServiceInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}${service.url}`,
    provider: { "@id": `${siteConfig.url}#business` },
    areaServed: siteConfig.serviceArea.cities.map((city) => ({
      "@type": "City",
      name: city,
    })),
  };
}
