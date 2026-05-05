export const siteConfig = {
  name: "Thermo Nord",
  legalName: "Thermo Nord (Rida Aachchiou — Entrepreneur individuel)",
  description:
    "Chauffagiste à Villeneuve-Saint-Georges (94). Installation, entretien et dépannage de chaudières, pompes à chaleur et climatisations dans le Val-de-Marne et l'Île-de-France.",
  shortDescription: "Chauffagiste à Villeneuve-Saint-Georges (94)",
  url: "https://thermo-nord.fr",
  locale: "fr_FR",
  language: "fr",
  twitterHandle: "",
  founder: "Rida Aachchiou",
  foundingDate: "2015-04-30",
  legal: {
    siren: "811362169",
    siret: "81136216900039",
    vat: "FR44811362169",
    nafCode: "43.22H",
    nafLabel:
      "Travaux d'installation d'équipements thermiques et de climatisation",
    legalForm: "Entrepreneur individuel",
  },
  contact: {
    email: "contact@thermo-nord.fr",
    phone: "+33780967374",
    phoneDisplay: "07 80 96 73 74",
    address: {
      street: "6 rue Léon Blum",
      city: "Villeneuve-Saint-Georges",
      postalCode: "94190",
      region: "Île-de-France",
      department: "Val-de-Marne",
      country: "FR",
      countryName: "France",
      latitude: 48.7333,
      longitude: 2.45,
    },
  },
  serviceArea: {
    primary: "Val-de-Marne (94)",
    secondary: "Île-de-France",
    cities: [
      "Villeneuve-Saint-Georges",
      "Valenton",
      "Créteil",
      "Choisy-le-Roi",
      "Vitry-sur-Seine",
      "Alfortville",
      "Maisons-Alfort",
      "Boissy-Saint-Léger",
      "Limeil-Brévannes",
      "Yerres",
      "Montgeron",
      "Brunoy",
    ],
  },
  hours: [
    {
      days: ["Mo", "Tu", "We", "Th", "Fr", "Sa"],
      label: "Lundi au samedi",
      opens: "07:30",
      closes: "20:00",
    },
    {
      days: ["Su"],
      label: "Dimanche",
      opens: "07:30",
      closes: "12:00",
    },
  ],
  rating: {
    value: 4.6,
    count: 43,
    source: "Google",
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
