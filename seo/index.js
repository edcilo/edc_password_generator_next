const SEO = {
  title: "Password generator",
  description: "Generate secure and random passwords.",
  canonical: "https://www.passwordgenerator.cool",
  openGraph: {
    type: "website",
    url: "https://www.passwordgenerator.cool",
    locale: "en_US",
    site_name: "edcilo.com - Password generator",
    images: [
      {
        url: "https://storage.edcilo.com/password-generator/cover.jpg",
        alt: "Cover image",
        width: 800,
        height: 600,
      },
    ],
    profile: {
      username: "edcilo",
    },
  },
  twitter: {
    cardType: "summary",
    handle: "@edcilo",
  },
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#e44d26",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
}

export default SEO
