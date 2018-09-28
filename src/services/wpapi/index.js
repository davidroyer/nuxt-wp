import axios from 'axios'
import RESOURCES from './api-resources'

const DEFAULTS = {
  siteId: '',

  siteUrl: '',
  // WordPress API endpoint.
  endpoint: '',

  // Default namespace.
  namespace: 'wp/v2'
}

export default class WpApi {
  constructor(options) {
    this.options = Object.assign({}, DEFAULTS, options)
    this.axios = this._createAxiosClient()
    this.apiBase = `https://${this.options.siteId}.wpapi.app/wp-json`
    this.path = ''

    /**
     * Set up predefined resources methods.
     */
    RESOURCES.forEach(({ collectionName, singleName }) => {
      this[collectionName] = async () => {
        const { data } = await this.axios.get(`${this.options.namespace}/${collectionName}`)
        return data
      }

      this[singleName] = async slug => {
        const { data } = await this.axios.get(
          `${this.options.namespace}/${collectionName}/?slug=${slug}`
        )
        return data[0]
      }
    })
  }

  /**
   * Create axios client.
   */
  _createAxiosClient() {
    const options = {
      baseURL: this._createBaseUrl()
    }
    return axios.create(options)
  }

  /**
   * Create base url.
   */
  _createBaseUrl() {
    const namespace = this.options.namespace
    const endpoint = this.options.endpoint.replace(namespace, '')
    return endpoint
  }

  /**
   * Modify namespace that is used.
   */
  namespace(namespace) {
    this.options.namespace = namespace
    return this
  }

  async posts(postType = 'posts') {
    const { data } = await this.axios.get(`${this.options.namespace}/${postType}`)
    return data
  }

  async post(slug, postType = 'posts') {
    const { data } = await this.axios.get(`${this.options.namespace}/${postType}/?slug=${slug}`)
    return data[0]
  }

  async postTypes() {
    const { data } = await this.axios.get(`${this.options.namespace}/types`)
    return data
  }

  async allSiteData() {
    const { data } = await this.axios.get(this.options.namespace)
    return data
  }

  async siteData() {
    const { data } = await this.axios.get(this.options.namespace)
    const { name, description, url, home, gmt_offset, timezone_string } = data
    return { name, description, url, home, gmt_offset, timezone_string }
  }
}
