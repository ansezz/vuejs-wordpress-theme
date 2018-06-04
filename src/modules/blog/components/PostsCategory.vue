<template>
  <div>
    <h1>{{category.name}}</h1>
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
      slug: {
        type: String,
        required: true
      },
      limit: {
        type: Number,
        default: 10
      }
    },
    data: function() {
      return {
        loading: false,
        posts: null,
        category: null
      }
    },
    created() {
      this.loading = true
      this.$wp
        .categories()
        .slug(this.slug)
        .then(
          function(cats) {
            this.category = cats[0]
            return this.$wp.posts().categories(this.category.id).perPage(this.limit)
          }.bind(this)
        )
        .then(
          function(data) {
            this.loading = false
            this.posts = data
          }.bind(this)
        )
    }
  }
</script>

<style scoped>

</style>
