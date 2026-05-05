import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Chauffagiste à Villeneuve-Saint-Georges (94)`,
  description: siteConfig.description,
  path: "/",
});

const services = [
  {
    title: "Installation de chaudière",
    description:
      "Pose de chaudières gaz à condensation et chaudières mixtes, dans le respect des normes en vigueur.",
    href: "/services/chaudiere",
  },
  {
    title: "Pompe à chaleur",
    description:
      "Installation de pompes à chaleur air/eau et air/air, éligibles aux aides MaPrimeRénov' et CEE.",
    href: "/services/pompe-a-chaleur",
  },
  {
    title: "Climatisation et froid",
    description:
      "Climatisation réversible et installations frigorifiques pour résidentiel et tertiaire.",
    href: "/services/climatisation",
  },
  {
    title: "Entretien et dépannage",
    description:
      "Entretien annuel obligatoire des chaudières et interventions de dépannage rapides en Val-de-Marne.",
    href: "/services/entretien-depannage",
  },
];

const faq = [
  {
    question: "Quelle est la zone d'intervention de Thermo Nord ?",
    answer:
      "Thermo Nord intervient principalement dans le Val-de-Marne (94) et plus largement dans le sud-est de l'Île-de-France : Villeneuve-Saint-Georges, Valenton, Créteil, Choisy-le-Roi, Vitry-sur-Seine, Alfortville, Maisons-Alfort, Boissy-Saint-Léger, Limeil-Brévannes, Yerres, Montgeron et Brunoy.",
  },
  {
    question: "L'entretien annuel d'une chaudière est-il obligatoire ?",
    answer:
      "Oui. Depuis le décret n° 2009-649, l'entretien annuel des chaudières dont la puissance est comprise entre 4 et 400 kW est obligatoire. Il est à la charge de l'occupant (locataire ou propriétaire occupant) et doit être réalisé par un professionnel qualifié.",
  },
  {
    question:
      "Quelles aides financières puis-je obtenir pour une pompe à chaleur ?",
    answer:
      "Les principales aides cumulables en 2026 sont MaPrimeRénov', les Certificats d'Économie d'Énergie (CEE), l'éco-prêt à taux zéro et la TVA à 5,5 %. Le montant dépend du revenu du foyer et du type d'équipement installé.",
  },
  {
    question: "Sous quel délai intervenez-vous pour un dépannage de chaudière ?",
    answer:
      "Pour un dépannage urgent en période de chauffe, Thermo Nord s'engage à intervenir sous 24 à 48 heures dans le Val-de-Marne. Hors période de chauffe, les délais peuvent atteindre 3 à 5 jours ouvrés.",
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      "Thermo Nord est ouvert du lundi au samedi de 7h30 à 20h00, et le dimanche de 7h30 à 12h00. Pour toute demande, vous pouvez appeler le 07 80 96 73 74.",
  },
];

const breadcrumbs = [{ name: "Accueil", url: "/" }];

export default function Home() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(breadcrumbs), faqJsonLd(faq)]} />

      <main className="flex flex-1 flex-col">
        <section className="bg-zinc-50 px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium uppercase tracking-wide text-zinc-500">
              <span>Chauffagiste — Villeneuve-Saint-Georges (94)</span>
              <span aria-hidden="true">•</span>
              <span
                className="inline-flex items-center gap-1 normal-case tracking-normal text-zinc-700"
                aria-label={`Note ${siteConfig.rating.value} sur 5 sur ${siteConfig.rating.count} avis Google`}
              >
                <span aria-hidden="true">★</span>
                <strong className="font-semibold">
                  {siteConfig.rating.value.toString().replace(".", ",")}/5
                </strong>
                <span className="text-zinc-500">
                  ({siteConfig.rating.count} avis Google)
                </span>
              </span>
            </div>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
              Installation, entretien et dépannage de chauffage et climatisation
              dans le Val-de-Marne
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700">
              Thermo Nord est une entreprise de chauffagistes basée à
              Villeneuve-Saint-Georges, dirigée par Rida Aachchiou. Nous
              installons et entretenons chaudières, pompes à chaleur et
              climatisations dans tout le sud-est de l'Île-de-France depuis
              2015.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800"
              >
                Appeler le {siteConfig.contact.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-5xl">
            <h2
              id="services-heading"
              className="text-3xl font-semibold tracking-tight text-zinc-900"
            >
              Nos services
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-700">
              Une gamme complète de prestations en chauffage, froid et
              climatisation pour les particuliers et les professionnels du
              Val-de-Marne.
            </p>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {services.map((service) => (
                <li
                  key={service.href}
                  className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-zinc-900">
                    <Link href={service.href} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-zinc-700">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="bg-zinc-50 px-6 py-20"
          aria-labelledby="zone-heading"
        >
          <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="zone-heading"
                className="text-3xl font-semibold tracking-tight text-zinc-900"
              >
                Zone d'intervention
              </h2>
              <p className="mt-3 max-w-md text-zinc-700">
                Thermo Nord intervient dans tout le sud-est de l'Île-de-France,
                avec un déplacement gratuit pour tout devis dans les communes
                suivantes&nbsp;:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {siteConfig.serviceArea.cities.map((city) => (
                  <li
                    key={city}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-700"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>

            <aside aria-labelledby="hours-heading" className="rounded-2xl bg-white p-6 ring-1 ring-zinc-200">
              <h2
                id="hours-heading"
                className="text-xl font-semibold tracking-tight text-zinc-900"
              >
                Horaires & contact
              </h2>
              <dl className="mt-4 space-y-2 text-sm text-zinc-700">
                {siteConfig.hours.map((slot) => (
                  <div
                    key={slot.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <dt>{slot.label}</dt>
                    <dd>
                      <time>{slot.opens}</time> – <time>{slot.closes}</time>
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 space-y-2 border-t border-zinc-200 pt-4 text-sm text-zinc-700">
                <p>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="font-semibold text-zinc-900 hover:underline"
                  >
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </p>
                <address className="not-italic">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                </address>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="text-3xl font-semibold tracking-tight text-zinc-900"
            >
              Questions fréquentes
            </h2>
            <dl className="mt-10 space-y-8">
              {faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-lg font-semibold text-zinc-900">
                    {item.question}
                  </dt>
                  <dd className="mt-2 text-zinc-700">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center">
          <div>
            <p className="font-medium text-zinc-900">{siteConfig.name}</p>
            <p>
              {siteConfig.contact.address.street},{" "}
              {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city}
            </p>
            <p className="text-xs text-zinc-500">
              SIRET&nbsp;: {siteConfig.legal.siret} • TVA&nbsp;:{" "}
              {siteConfig.legal.vat}
            </p>
          </div>
          <nav aria-label="Liens secondaires" className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-zinc-900">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-zinc-900">
              Confidentialité
            </Link>
            <Link href="/contact" className="hover:text-zinc-900">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
