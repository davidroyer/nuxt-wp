<template>
  <v-wrapper>
    <template v-if="page">
      <h1 v-html="page.title.rendered"></h1>
      <main class="content" v-html="page.content.rendered"></main>
    </template>
  </v-wrapper>
</template>

<script>
export default {
  // async asyncData({ app, params, payload }) {
  //   let page = await app.$wp.page('contact')
  //   return { page }
  // },
  head() {
    return {
      title: 'Contact Page'
    }
  }
}
</script>
