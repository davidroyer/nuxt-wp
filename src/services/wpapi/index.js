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

    /**
     * Set up predefined resources methods.
     */
    RESOURCES.forEach(({ collectionName, singleName }) => {
      this[collectionName] = async () => {
        const { data } = await this.axios.get(`${collectionName}`)
        return data
      }

      if (singleName === 'menu') {
        this[singleName] = async slug => {
          const { data } = await this.axios.get(`${collectionName}/${slug}`)
          return data
        }
      } else {
        this[singleName] = async slug => {
          const { data } = await this.axios.get(`${collectionName}/?slug=${slug}`)
          return data[0]
        }
      }
    })

    this._createCustomPostRoutes()
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
    return `${this.options.wpSiteUrl}/wp-json/wp/v2/`
    // const namespace = this.options.namespace
    // const endpoint = this.options.endpoint.replace(namespace, '')
    // return endpoint
  }

  /**
   * Modify namespace that is used.
   */
  namespace(namespace) {
    this.options.namespace = namespace
    return this
  }

  async posts(postType = 'posts') {
    const { data } = await this.axios.get(`${postType}`)
    return data
  }

  async getPosts(postType = 'posts', options) {
    const params = {
      ...options
    }
    const { data } = await this.axios.get(`${postType}`, { params })
    return data
  }

  async post(slug, postType = 'posts') {
    const { data } = await this.axios.get(`${postType}`)
    return data[0]
  }

  async postTypes() {
    const { data } = await this.axios.get(`types`)
    return data
  }

  async allSiteData() {
    const { data } = await this.axios.get(`${this.options.wpSiteUrl}/wp-json`)
    return data
  }

  async siteData() {
    const { data } = await this.axios.get(`${this.options.wpSiteUrl}/wp-json`)
    const { name, description, url, home, gmt_offset, timezone_string } = data
    return { name, description, url, home, gmt_offset, timezone_string }
  }

  async _createCustomPostRoutes() {
    const PostTypes = await this.postTypes()

    Object.entries(PostTypes).forEach(([key, postObject]) => {
      const { rest_base } = postObject
      this[rest_base] = async () => {
        const { data } = await this.axios.get(`${rest_base}`)
        return data
      }

      this[`${key}`] = async slug => {
        const { data } = await this.axios.get(`${rest_base}/?slug=${slug}`)
        return data[0]
      }
    })
  }
}
