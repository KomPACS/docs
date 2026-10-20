import { defineRouteMiddleware } from '@astrojs/starlight/route-data'

const otherLocaleApiGroup = { root: 'API (generated)', en: 'API (generováno)' }

export const onRequest = defineRouteMiddleware(async (context, next) => {
  await next()
  const route = context.locals.starlightRoute
  const hidden = otherLocaleApiGroup[route.locale === 'en' ? 'en' : 'root']
  route.sidebar = route.sidebar.filter((entry) => entry.label !== hidden)
})
