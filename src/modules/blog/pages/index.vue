<template>
  <section>
    <posts-featured :limit="6"></posts-featured>
    <div class="container">
      <posts-category slug="laravel" :limit="3"></posts-category>
    </div>
    <div class="container">
      <posts-category slug="vuejs" :limit="3"></posts-category>
    </div>
    <div class="container">
      <post v-for="(item , key) in posts" :key="key" :item="item"></post>
    </div>
  </section>
</template>

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
          this.$wp
              .posts()
              .order('desc')
              .orderby('date')
              .then(
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
