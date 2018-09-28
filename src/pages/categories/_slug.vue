<template>
  <v-wrapper>
    <v-intro :tag="1" :text="category.name">
    </v-intro>
    <div class="posts">
      <div class="post" v-for="(post, index) in posts" :key="index">
        <h3><nuxt-link :to="`/articles/${post.slug}`" v-html="post.title.rendered"></nuxt-link></h3>
      </div>
    </div>
    <pre>{{category}}</pre>    
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const category = await app.$wp.category(params.slug)
    const posts = await app.$wp.getPosts('posts', {
      categories: category.id
    })
    return {
      category,
      posts
    }
  },
  head() {
    return {
      title: 'Category'
    }
  }
}
</script>
