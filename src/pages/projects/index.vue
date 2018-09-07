<template>
  <v-wrapper>
    <v-intro :tag="1" text="Projects">
    </v-intro>
    <div class="posts">
      <div class="post" v-for="(project, index) in projects" :key="index">
        <h3><nuxt-link :to="`/projects/${project.slug}`" v-html="project.title.rendered"></nuxt-link></h3>
      </div>
    </div>
  </v-wrapper>
</template>

<script>
export default {
  async asyncData({ app, store, params }) {
    const projects = await app.$wp.customPosts('projects')
    return {
      projects
    }
  },
  head() {
    return {
      title: 'Projects'
    }
  }
}
</script>
