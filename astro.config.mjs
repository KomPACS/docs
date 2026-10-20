import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import rehypeMermaid from 'rehype-mermaid'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import starlightSidebarTopics from 'starlight-sidebar-topics'

const group = (label, en, directory, collapsed = false) => ({
  label,
  translations: { en },
  collapsed,
  items: [{ autogenerate: { directory } }],
})

const mermaidConfig = {
  theme: 'base',
  flowchart: { nodeSpacing: 16, rankSpacing: 16, padding: 8, diagramPadding: 4 },
  sequence: { wrap: true, width: 100, actorMargin: 16, messageFontSize: 15, actorFontSize: 15, noteFontSize: 14 },
  themeVariables: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '16px',
    background: '#ffffff',
    primaryColor: '#e3f1ef',
    primaryBorderColor: '#7dbfb6',
    primaryTextColor: '#14232a',
    secondaryColor: '#f3f6f7',
    tertiaryColor: '#f8fbfb',
    lineColor: '#0f6b66',
    textColor: '#2c3d44',
    clusterBkg: '#f8fbfb',
    clusterBorder: '#dde5e7',
    actorBkg: '#e3f1ef',
    actorBorder: '#7dbfb6',
    signalColor: '#0f6b66',
    noteBkgColor: '#eeeafe',
    noteBorderColor: '#4b33b5',
  },
}

export default defineConfig({
  site: 'https://docs.kompacs.cz',
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: 'inline-svg', mermaidConfig }]],
  },
  integrations: [
    starlight({
      title: 'KomPACS docs',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
          },
        },
      ],
      description: 'KomPACS technical documentation. Prototype, not a medical device.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Čeština', lang: 'cs' },
        en: { label: 'English', lang: 'en' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/KomPACS/docs' }],
      editLink: { baseUrl: 'https://github.com/KomPACS/docs/edit/main/' },
      expressiveCode: {
        themes: ['github-dark-default', 'github-light'],
        styleOverrides: {
          borderRadius: '12px',
          borderColor: 'var(--sl-color-hairline)',
          codeBackground: 'var(--kp-code-bg)',
          frames: {
            editorTabBarBackground: 'var(--kp-code-bar)',
            editorActiveTabBackground: 'var(--kp-code-bg)',
            terminalTitlebarBackground: 'var(--kp-code-bar)',
            terminalBackground: 'var(--kp-code-bg)',
            frameBoxShadowCssValue: 'none',
          },
        },
      },
      customCss: ['./src/styles/custom.css'],
      routeMiddleware: './src/routeMiddleware.ts',
      components: {
        Header: './src/components/Header.astro',
        SiteTitle: './src/components/SiteTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        Footer: './src/components/Footer.astro',
      },
      plugins: [
        starlightSidebarTopics([
          {
            id: 'overview',
            label: { en: 'Overview', cs: 'Přehled' },
            link: '/overview/what-is-kompacs/',
            items: [group('Přehled', 'Overview', 'overview'), group('Návody krok za krokem', 'Tutorials', 'tutorials')],
          },
          {
            label: { en: 'Guides', cs: 'Návody' },
            link: '/how-to/deploy-for-a-hospital/',
            items: [group('Postupy', 'How-to guides', 'how-to')],
          },
          {
            id: 'api',
            label: { en: 'API reference', cs: 'API' },
            link: '/reference/api-overview/',
            items: [group('Reference', 'Reference', 'reference'), ...openAPISidebarGroups],
          },
          {
            label: { en: 'Architecture', cs: 'Architektura' },
            link: '/explanation/architecture/',
            items: [group('Vysvětlení', 'Explanation', 'explanation'), group('Rozhodnutí', 'Decisions', 'decisions', true)],
          },
        ], { topics: { overview: ['/', '/en'], api: ['/reference/api', '/reference/api/**', '/en/reference/api', '/en/reference/api/**'] } }),
        starlightLinksValidator({ errorOnLocalLinks: true, exclude: ['/reference/api/**', '/en/reference/api/**'] }),
        starlightOpenAPI([
          { base: 'reference/api', schema: './contract/openapi.json', sidebar: { label: 'API (generováno)' } },
          { base: 'en/reference/api', schema: './contract/openapi.json', sidebar: { label: 'API (generated)' } },
        ]),
        starlightLlmsTxt(),
      ],
    }),
  ],
})
