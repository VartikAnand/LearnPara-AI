const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "rapidapi.com",
      "openai80.p.rapidapi.com/chat/completions",
      "rapidapi.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true,
  },
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
};


