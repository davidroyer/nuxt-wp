<template>
  <v-wrapper>
    <v-intro :tag="1" text="Projects">
    </v-intro>
    <div class="posts">
      <div class="post" v-for="(post, index) in posts" :key="index">
        <h3><nuxt-link :to="`/projects/${post.slug}`" v-html="post.title.rendered"></nuxt-link></h3>
      </div>
    </div>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const posts = await app.$wp.posts('projects')
    return {
      posts
    }
  },
  head() {
    return {
      title: 'Blog Articles'
    }
  }
}
</script>
