import WpApi from '~/lib/WpApi.js'
const wpApiUrl = 'http://nuxt-wp.dev'

export default ({ app }, inject) => {
  // Set `$wp` instance on `app`
  // This way we can use it in middleware and pages `asyncData`/`fetch`
  app.$wp = new WpApi(`${wpApiUrl}`)
}
