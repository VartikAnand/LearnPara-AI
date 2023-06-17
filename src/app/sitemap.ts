import { MetadataRoute } from 'next';



type SitemapItem = {
  url: string;
  lastModified?: string | Date;
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://learnpara.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://learnpara.vercel.app/about/Documentation',
      lastModified: new Date(),
    },
    {
      url: 'https://learnpara.vercel.app/blog',
      lastModified: new Date(),
    },
  ];
}
