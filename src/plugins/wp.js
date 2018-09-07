import wpApi from '@/services/wpApi.js'
const apiBaseUrl = process.env.apiBaseUrl

/**
 * Set `$wp` on the `app` instance
 * This way we can use it in middleware and pages `asyncData`/`fetch`
 */
export default ({ app }, inject) => {
  const wp = new wpApi(`${apiBaseUrl}`)
  app.$wp = wp
  inject('wp', wp)
}
