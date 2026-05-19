import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "HomeReady Finance Solutions | Get Bond-Ready in 30-90 Days",
  description = "HomeReady Finance Solutions helps South Africans prepare for bond approval through credit preparation, financial positioning, and strategic credit recovery. 87% success rate with 500+ clients.",
  keywords = "credit preparation, bond readiness, home loan South Africa, credit recovery, declined bond application, credit dispute, financial positioning, HomeReady Finance",
  url = "https://www.homereadyfinance.co.za",
  image = "https://www.homereadyfinance.co.za/logo.png",
  structuredData = null,
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "HomeReady Finance Solutions",
    url: "https://www.homereadyfinance.co.za",
    logo: "https://www.homereadyfinance.co.za/logo.png",
    image: "https://www.homereadyfinance.co.za/logo.png",
    description:
      "Credit preparation, financial positioning, and bond readiness services in South Africa. We prepare you to qualify for credit — properly and strategically.",
    telephone: "+27871507207",
    email: "Admin@homereadyfinance.co.za",
    foundingDate: "2015",
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://www.facebook.com/HomeReadyFinanceSolutions",
      "https://www.instagram.com/homereadyfinance",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Credit Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Declined Application Recovery",
            description:
              "Analysis of bond declined reasons, credit & affordability correction plan, and re-application readiness strategy.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Credit Report Assessment",
            description:
              "Comprehensive bureau analysis, identification of negative listings, and credit score breakdown.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Credit Dispute Administration",
            description:
              "Drafting & submission of disputes, incorrect listing challenges, and status update tracking.",
          },
        },
      ],
    },
  };

  const jsonLd = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="HomeReady Finance Solutions" />

      {/* Favicon Setup */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#C50B0C" />

      {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="HomeReady Finance Solutions" />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (Google rich results) */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
