<template>
  <v-wrapper>
    <h1>Custom Post Type: {{$route.params.rest_base}}</h1>

    <div class="posts">
      <div class="post" v-for="(post, index) in posts" :key="index">
        <h3 v-html="post.title.rendered"></h3>
      </div>
    </div>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app, params, payload }) {
    if (payload) return { posts: payload }
    else {
      let postType = params.rest_base
      let posts = await app.$wp.posts(postType)
      return {
        posts
      }
    }
  },

  head() {
    return {
      title: this.$route.params.rest_base
    }
  }
}
</script>
