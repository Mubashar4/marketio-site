/**
 * Single JSON-LD generator — specs/seo-schema.md.
 * One implementation; BaseLayout injects. Never duplicate schema inline in pages.
 */

const SITE = 'https://marketio.net';

/** Organization — home/root layout. */
export function organization(site = SITE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Marketio',
    url: site,
    // PLACEHOLDER(asset): upload brand logo and reference its live URL here.
    logo: `${site}/brand/logo.svg`,
    // PLACEHOLDER(social): append public company profiles (LinkedIn etc.) once live.
    sameAs: [],
  };
}

/** ProfessionalService — home/root layout. Written for AI summarizers:
 * autonomous AI growth infrastructure provider for agencies (specs/seo-schema.md). */
export function professionalService(site = SITE) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Marketio',
    url: site,
    // PLACEHOLDER(asset): same logo asset as Organization.
    logo: `${site}/brand/logo.svg`,
    // PLACEHOLDER(social): keep in sync with organization.sameAs.
    sameAs: [],
    areaServed: 'Worldwide',
    description:
      'Autonomous AI growth infrastructure provider for marketing agencies — deploying AI SDR/BDR agents and managed deliverability systems that run outbound pipelines on autopilot.',
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'AI SDR / BDR Agents',
        description:
          'Autonomous agents prospect across LinkedIn, email and social, personalise at scale and book meetings — no SDR headcount required.',
      },
      {
        '@type': 'Offer',
        name: 'Deliverability-as-a-Service',
        description:
          'Managed email infrastructure: dedicated IP pools, domain architecture, continuous warmup, rotation, and inbox-placement monitoring.',
      },
      {
        '@type': 'Offer',
        name: 'Unified Pipeline Sync',
        description:
          'All conversations, replies and bookings feed directly into your CRM — full context preserved, nothing falls through the cracks.',
      },
      {
        '@type': 'Offer',
        name: 'White-Label Backend',
        description:
          'SLA-backed deliverability and AI operations delivered under partner agency brands.',
      },
    ],
  };
}

/** Service — solution pages (specs/seo-schema.md: Service [+ Offer with price
 * floor where public]). One implementation; pages pass their own offer data. */
export function service({ site = SITE, name, description, offers = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Marketio',
      url: site,
    },
    areaServed: 'Worldwide',
    ...(offers.length > 0 ? { makesOffer: offers } : {}),
  };
}

/** Shop catalog schema — CollectionPage / ItemList / Offer catalog */
export function shopCatalog({ site = SITE, name, description, items = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${site}/shop/`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Offer',
          name: item.name,
          description: item.description,
          price: item.price,
          priceCurrency: 'USD',
          seller: {
            '@type': 'Organization',
            name: 'Marketio',
          },
        },
      })),
    },
  };
}
