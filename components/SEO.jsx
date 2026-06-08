import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "HomeReady Finance Solutions | Credit Preparation & Bond Readiness South Africa",
  description = "HomeReady Finance Solutions — South Africa's trusted credit preparation and bond readiness experts. We help you qualify for home loans with an 87% success rate. Get bond-ready in 30-90 days.",
  keywords = "HomeReady, Home Ready, HomeReady Finance, HomeReady Finance Solutions, credit preparation South Africa, bond readiness, home loan preparation, declined bond recovery, credit repair SA, credit dispute South Africa, bond application help, first-time home buyer South Africa, home ready finance, homeready finance solutions",
  url = "https://www.homereadyfinance.co.za/",
  image = "https://www.homereadyfinance.co.za/logo.png",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="HomeReady Finance Solutions" />
      <meta name="geo.region" content="ZA" />
      <meta name="geo.placename" content="South Africa" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#C50B0C" />

      {/* Open Graph */}
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
    </Helmet>
  );
};

export default SEO;
