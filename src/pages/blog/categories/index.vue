<template>
  <v-wrapper>
    <v-intro :tag="1" text="Blog Article Categories">
    </v-intro>
    <div class="posts">
      <div class="post" v-for="(category, index) in categories" :key="index">
        <h3><nuxt-link :to="`/blog/categories/${category.slug}`" v-html="category.name"></nuxt-link></h3>
      </div>
    </div>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const categories = await app.$wp.categories()
    return {
      categories
    }
  },
  head() {
    return {
      title: 'Blog Article Categories'
    }
  }
}
</script>
