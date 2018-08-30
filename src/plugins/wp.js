import wpApi from '@/services/wpApi.js'
const apiBaseUrl = 'http://nuxt-wp.dev'

/**
 * Set `$wp` on the `app` instance
 * This way we can use it in middleware and pages `asyncData`/`fetch`
 */
export default ({ app }, inject) => {
  const wp = new wpApi(`${apiBaseUrl}`)
  app.$wp = wp
  inject('wp', wp)
}
