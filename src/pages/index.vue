<template>
  <v-wrapper>
    <v-intro :tag="1" text="Frontend For Headless Wordpress">
      Listing of pages and blog posts
    </v-intro>

    <div class="pages mt-8">
      <h2>Pages</h2>
      <div class="page" v-for="(page, index) in pages" :key="index">
        <h3><nuxt-link :to="`/${page.slug}`" v-html="page.title.rendered"></nuxt-link></h3>
      </div>
    </div>

    <div class="pages mt-8" v-if="projects">
      <h2>Projects</h2>
      <div class="page" v-for="(project, index) in projects" :key="index">
        <h3><nuxt-link :to="`/projects/${project.slug}`" v-html="project.title.rendered"></nuxt-link></h3>
      </div>
    </div>

    <div class="menus mt-8">
      <h2>Menus</h2>
      <div class="page" v-for="(menu, index) in menus" :key="index">
        <h3><nuxt-link :to="`/${menu.slug}`" v-html="menu.name"></nuxt-link></h3>
      </div>
    </div>
    <hr>
    <div class="posts mt-8">
      <h2>Blog Posts</h2>
      <div class="page" v-for="(post, index) in posts" :key="index">
        <h3><nuxt-link :to="`/articles/${post.slug}`" v-html="post.title.rendered"></nuxt-link></h3>
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
        <h3><nuxt-link :to="`/blog/categories/${category.slug}`" v-html="category.name"></nuxt-link></h3>
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
    console.log(app.$wp)
    const menus = await app.$wp.menus()
    const posts = await app.$wp.posts()
    const pages = await app.$wp.pages()
    const categories = await app.$wp.categories()
    const users = await app.$wp.users()
    const comments = await app.$wp.comments()
    const taxonomies = await app.$wp.taxonomies()
    const postTypes = await app.$wp.postTypes()
    const projects = await app.$wp.projects()

    const mainMenu = await app.$wp.menu('main-navigation')
    return {
      menus,
      users,
      comments,
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
