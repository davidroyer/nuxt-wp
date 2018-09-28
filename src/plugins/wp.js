import WpApi from '@/services/wpapi'
const apiBaseUrl = process.env.apiBaseUrl

/**
 * Set `$wp` on the `app` instance
 * This way we can use it in middleware and pages `asyncData`/`fetch`
 */
export default ({ app }, inject) => {
  const wp = new WpApi({
    siteUrl: apiBaseUrl,
    endpoint: `${apiBaseUrl}/wp-json`,
    siteId: 'demo1'
  })
  app.$wp = wp
  inject('wp', wp)
}
