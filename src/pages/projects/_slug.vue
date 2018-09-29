<template>
  <v-wrapper>
    <template v-if="project">
      <h1 v-html="project.title.rendered"></h1>
      <main class="content" v-html="project.content.rendered">
      </main>
    </template>

  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app, params, payload }) {
    if (payload) return { project: payload }
    else {
      let project = await app.$wp.project(params.slug)
      return {
        project
      }
    }
  },

  head() {
    return {
      title: this.project.title.rendered
    }
  }
}
</script>
