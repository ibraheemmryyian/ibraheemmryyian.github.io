import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, image, url, script }) {
    const siteTitle = "Ibraheem Mryyian | AI Engineer";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const metaDesc = description || "Portfolio of Ibraheem Mryyian - AI Engineer & Founder of SymbioFlows. Building intelligent systems for industrial symbiosis.";
    const metaImg = image || "https://ibraheemmryyian.github.io/og-image.png";
    const metaUrl = url || "https://ibraheemmryyian.github.io/";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDesc} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDesc} />
            <meta property="og:image" content={metaImg} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={metaUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDesc} />
            <meta property="twitter:image" content={metaImg} />

            {/* Structured Data (JSON-LD) */}
            {script && (
                <script type="application/ld+json">
                    {JSON.stringify(script)}
                </script>
            )}
        </Helmet>
    );
}
