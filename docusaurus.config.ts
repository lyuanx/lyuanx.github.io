import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '技术博客',
  tagline: '代码世界，记录成长',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-github-username.github.io',
  baseUrl: '/',

  organizationName: 'your-github-username',
  projectName: 'my-blog',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
          },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '技术博客',
      logo: {
        alt: '博客 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/your-github-username',
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
              href: 'https://github.com/your-github-username',
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
