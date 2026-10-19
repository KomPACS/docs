import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import rehypeMermaid from 'rehype-mermaid'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'
import starlightSidebarTopics from 'starlight-sidebar-topics'

const group = (label, cs, directory, collapsed = false) => ({
  label,
  translations: { cs },
  collapsed,
  items: [{ autogenerate: { directory } }],
})

export default defineConfig({
  site: 'https://docs.kompacs.cz',
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: 'inline-svg', mermaidConfig: { theme: 'neutral' } }]],
  },
  integrations: [
    starlight({
      title: 'KOMPACS docs',
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
      description: 'KOMPACS technical documentation. Prototype, not a medical device.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        cs: { label: 'Čeština', lang: 'cs' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/KomPACS/docs' }],
      editLink: { baseUrl: 'https://github.com/KomPACS/docs/edit/main/' },
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
            label: { en: 'Overview', cs: 'Přehled' },
            link: '/overview/what-is-kompacs/',
            items: [group('Overview', 'Přehled', 'overview'), group('Tutorials', 'Návody krok za krokem', 'tutorials')],
          },
          {
            label: { en: 'Guides', cs: 'Návody' },
            link: '/how-to/deploy-for-a-hospital/',
            items: [group('How-to guides', 'Postupy', 'how-to')],
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
            items: [group('Explanation', 'Vysvětlení', 'explanation'), group('Decisions', 'Rozhodnutí', 'decisions', true)],
          },
        ], { topics: { api: ['/reference/api', '/reference/api/**', '/cs/reference/api', '/cs/reference/api/**'] } }),
        starlightLinksValidator({ errorOnLocalLinks: true, exclude: ['/reference/api/**', '/cs/reference/api/**'] }),
        starlightOpenAPI([
          { base: 'reference/api', schema: './contract/openapi.json', sidebar: { label: 'API (generated)' } },
          { base: 'cs/reference/api', schema: './contract/openapi.json', sidebar: { label: 'API (generováno)' } },
        ]),
        starlightLlmsTxt(),
      ],
    }),
  ],
})
