import { IConfig } from 'next-sitemap';

const config: IConfig = {
    siteUrl: 'https://www.mrudnev.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
};

export default config;
