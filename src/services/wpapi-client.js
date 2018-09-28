import axios from 'axios'

class WpApi {
  constructor(siteId) {
    this.siteId = siteId
    this.apiBase = `https://${this.siteId}.wpapi.app/wp-json`
    this.options = {
      params: {
        page: 1,
        per_page: 10
      }
    }
  }

  async categories() {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/categories`, this.options)
  }

  async category(slug) {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/categories/?slug=${slug}`)
    return data[0]
  }

  async menus() {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/menus`)
    return data
  }

  async menu(slug) {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/menus/${slug}`)
    return data
  }

  async posts(postType = 'posts') {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/${postType}`, this.options)
    return data
  }

  async post(slug, postType = 'posts') {
    const { data } = await axios.get(
      `${this.apiBase}/wp/v2/${postType}/?slug=${slug}`,
      this.options
    )
    return data[0]
  }

  async pages() {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/pages`, this.options)
    return data
  }

  async page(slug) {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/pages/?slug=${slug}`)
    return data[0]
  }

  async postTypes() {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/types`, this.options)
    return data
  }

  async taxonomies() {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/taxonomies`, this.options)
    return data
  }

  async taxonomy(slug) {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/taxonomies/?slug=${slug}`)
    return data[0]
  }

  async allSiteData() {
    const { data } = await axios.get(this.apiBase)
    return data
  }

  async siteData() {
    const { data } = await axios.get(this.apiBase)
    const { name, description, url, home, gmt_offset, timezone_string } = data
    return { name, description, url, home, gmt_offset, timezone_string }
  }
}

export default WpApi
