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
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app }) {
    const posts = await app.$wp.posts()
    const pages = await app.$wp.pages()
    const postTypes = await app.$wp.postTypes()

    return {
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
