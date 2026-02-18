// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Enspiral Forge',
  tagline: 'Ship stuff that matters',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://enspiral.github.io',
  baseUrl: '/forge/',

  organizationName: 'enspiral',
  projectName: 'forge',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Enspiral Forge',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'handbookSidebar',
            position: 'left',
            label: 'Handbook',
          },
          {
            href: 'https://handbook.enspiral.com',
            label: 'Enspiral Network',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Handbook',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Agreements',
                to: '/agreements/membership',
              },
              {
                label: 'Guidelines',
                to: '/guidelines/invitation',
              },
            ],
          },
          {
            title: 'Enspiral',
            items: [
              {
                label: 'Enspiral Handbook',
                href: 'https://handbook.enspiral.com',
              },
              {
                label: 'Loomio',
                href: 'https://www.loomio.com/enspiral',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Enspiral Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
