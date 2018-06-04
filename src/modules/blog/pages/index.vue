<template>
  <section>
    <div class="container">
      <posts-featured :limit="5"></posts-featured>
    </div>
    <div class="container">
      <posts-category slug="laravel" :limit="5"></posts-category>
    </div>
    <div class="container">
      <posts-category slug="vuejs" :limit="5"></posts-category>
    </div>
    <div class="container">
      <post v-for="(item , key) in posts" :key="key" :item="item"></post>
    </div>
  </section>
</template>

<style>
</style>

<script>
  import PostsFeatured from './../components/PostsFeatured'
  import Post from './../components/Post'
  import PostsCategory from './../components/PostsCategory'

  export default {
    components: {
      Post,
      PostsFeatured,
      PostsCategory
    },
    name: 'index-blog',
    data() {
      return {
        posts: null,
        loading: false
      }
    },
    mounted() {
      this.loading = true
      this.$wp.posts().then(
        function(data) {
          this.posts = data
          this.loading = true
        }.bind(this)
      )
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
</style>
