<template>
  <v-wrapper>
    <v-intro :tag="1" text="Frontend For Headless Wordpress">
      Listing of pages and blog posts
    </v-intro>

    <div class="pages">
      <h2>Pages</h2>
      <div class="page" v-for="(page, index) in pages" :key="index">
        <h3><nuxt-link :to="`/${page.slug}`" v-html="page.title.rendered"></nuxt-link></h3>
      </div>
    </div>


    <div class="menus">
      <h2>Menus</h2>
      <div class="page" v-for="(menu, index) in menus" :key="index">
        <h3><nuxt-link :to="`/${menu.slug}`" v-html="menu.name"></nuxt-link></h3>
      </div>
    </div>
    <hr>
    <div class="posts mt-8">
      <h2>Blog Posts</h2>
      <div class="page" v-for="(post, index) in posts" :key="index">
        <h3><nuxt-link :to="`/blog/${post.slug}`" v-html="post.title.rendered"></nuxt-link></h3>
      </div>
    </div>

    <div class="posts mt-8">
      <h2>Post Types</h2>
      <div class="page" v-for="(postType, key) in postTypes" :key="key">
        <h3><nuxt-link :to="`/post-types/${postType.rest_base}`" v-html="postType.name"></nuxt-link></h3>
      </div>
    </div>

    <div class="posts mt-8">
      <h2>Categories</h2>
      <div class="page" v-for="(category, key) in categories" :key="key">
        <h3><nuxt-link :to="`/${category.slug}`" v-html="category.name"></nuxt-link></h3>
      </div>
    </div>

    <div class="posts mt-8">
      <h2>Taxonomies</h2>
      <div class="page" v-for="(taxonomy, key) in taxonomies" :key="key">
        <h3><nuxt-link :to="`/${taxonomy.slug}`" v-html="taxonomy.name"></nuxt-link></h3>
      </div>
    </div>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app }) {
    const menus = await app.$wp.menus()
    const posts = await app.$wp.posts()
    const pages = await app.$wp.pages()
    const categories = await app.$wp.categories()
    const taxonomies = await app.$wp.taxonomies()
    const postTypes = await app.$wp.postTypes()
    const projects = await app.$wp.posts('projects')

    const mainMenu = await app.$wp.menu('main')
    return {
      menus,
      taxonomies,
      categories,
      mainMenu,
      projects,
      pages,
      posts,
      postTypes
    }
  },
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>
