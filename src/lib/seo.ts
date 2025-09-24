export const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MaxBax Import",
  "url": process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  "logo": "/logo.svg",
  "sameAs": []
};

export const jsonLdBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Главная",
      "item": (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com")
    }
  ]
};
