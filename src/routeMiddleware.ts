import { defineRouteMiddleware } from '@astrojs/starlight/route-data'

const otherLocaleApiGroup = { root: 'API (generováno)', cs: 'API (generated)' }

export const onRequest = defineRouteMiddleware(async (context, next) => {
  await next()
  const route = context.locals.starlightRoute
  const hidden = otherLocaleApiGroup[route.locale === 'cs' ? 'cs' : 'root']
  route.sidebar = route.sidebar.filter((entry) => entry.label !== hidden)
})
