import { MetadataRoute } from 'next';

type Rule = {
  userAgent: string | string[];
  allow?: string | string[];
  disallow?: string | string[];
  crawlDelay?: number;
};

type Robots = {
  rules: Rule | Rule[];
  sitemap?: string | string[];
  host?: string;
};

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: 'https://learnpara.vercel.app/sitemap.xml',
  };
}
