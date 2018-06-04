<template>
  <div>
    <h1>Featured Posts</h1>
    <post v-for="(item , key) in posts" :key="key" :item="item"></post>
  </div>
</template>

<script>
  import Post from './Post'

  export default {
    components: {
      Post
    },
    name: 'categoryHome',
    props: {
      limit: {
        type: Number,
        default: 10
      }
    },
    data: function() {
      return {
        loading: false,
        posts: null
      }
    },
    created() {
      this.loading = true
      this.$wp.posts()
        .perPage(this.limit)
        .order('desc')
        .orderby('date')
        .then(
          function(data) {
            this.posts = data
            this.loading = true
          }.bind(this)
        )
    }
  }
</script>

<style scoped>

</style>
