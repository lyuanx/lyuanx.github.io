import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '技术博客',
  titleDelimiter: ' | ',
  tagline: '代码世界，记录成长 - 分享技术文章、编程教程和开发经验',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lyuanx.github.io',
  baseUrl: '/',

  organizationName: 'lyuanx',
  projectName: 'lyuanx.github.io',

  onBrokenLinks: 'throw',

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: '技术博客',
            description: '分享技术文章、编程教程和开发经验',
          },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogDescription: '分享技术文章、编程教程和开发经验',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '技术博客',
      logo: {
        alt: '技术博客 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/lyuanx',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客',
          items: [
            {
              label: '博客列表',
              to: '/blog',
            },
          ],
        },
        {
          title: '链接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/lyuanx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 技术博客. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
