import axios from 'axios'
const menuApiPath = 'menus/v1/menus'

class WpApi {
  constructor(siteurl) {
    this.apiBase = `${siteurl}/wp-json`
    this.menuItemsUrl = `${this.apiBase}/${menuApiPath}`
    this.options = {
      params: {
        page: 1,
        per_page: 10
      }
    }
  }

  async menus() {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/menus`)
    return data
  }

  async menu(menuSlug) {
    const { data } = await axios.get(`${this.apiBase}/wp/v2/menus/${menuSlug}`)
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

  fullSiteData() {
    return axios
      .get(this.apiBase)
      .then(json => {
        return { fullSiteData: json.data }
      })
      .catch(e => ({ error: e }))
  }

  siteData() {
    return axios
      .get(this.apiBase)
      .then(json => {
        const { name, description, url, home, gmt_offset, timezone_string } = json.data
        return { siteData: { name, description, url, home, gmt_offset, timezone_string } }
      })
      .catch(e => ({ error: e }))
  }
}

export default WpApi
