// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Websoft9 知识库',
  tagline: 'Dinosaurs are cool',
  url: 'https://support.websoft9.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Websoft9', // Usually your GitHub org/user name.
  projectName: 'document', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn', 'en'],
  },
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/websoft9/doc.websoft9.com/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/websoft9/doc.websoft9.com/tree/main/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Websoft9',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },

          {to: '/blog', label: '日志', position: 'left'},

          {to: '/app', label: '应用中心', position: 'left'},

          {to: '/community', label: '开源社区', position: 'left'},

          {type: 'localeDropdown', position: 'right',},

          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub2',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品与服务',
            items: [
              {
                label: '应用',
                to: '/docs/intro',
              },
              {
                label: '解决方案',
                to: '/docs/intro',
              },
              {
                label: '行业',
                to: '/docs/intro',
              },

              {
                label: '技术服务',
                to: '/docs/intro',
              },
              {
                label: '分发服务',
                to: '/docs/intro',
              },


            ],
          },
          {
            title: '技术支持',
            items: [
              {
                label: '文档 ',
                href: '/',
              },

              {
                label: 'FAQ ',
                href: '/docs/faq',
              },
              {
                label: '7×24 工单',
                href: 'https://www.websoft9.com/cn/ticket',
              },
              {
                label: '人工支持',
                href: 'https://www.websoft9.com/cn/contact',
              },
            ],
          },
          {
            title: '资源',
            items: [
              {
                label: '博客',
                to: 'https://blog.websoft9.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/websoft9',
              },
            ],
          },
        ],

        logo: {
          alt: 'Facebook Open Source Logo',
          src: 'img/logo.svg',
          width: 160,
          height: 51,
          href: 'https://opensource.facebook.com',
        },
        copyright: `Copyright ©2014- ${new Date().getFullYear()} 长沙网久软件有限公司 备案：湘ICP备16009117号`,
      },
 
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
	minHeadingLevel: 2,
	maxHeadingLevel: 6
      }
    }),
};

module.exports = config;
