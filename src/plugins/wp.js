import WpApi from '@/services/wpapi-client.js'
const apiBaseUrl = process.env.apiBaseUrl
// https://demo1.wpapi.app
/**
 * Set `$wp` on the `app` instance
 * This way we can use it in middleware and pages `asyncData`/`fetch`
 */
export default ({ app }, inject) => {
  const wp = new WpApi('demo1')
  // const wp = new wpApi(`${apiBaseUrl}`)
  app.$wp = wp
  inject('wp', wp)
}
