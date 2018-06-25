<template>
  <section v-if="category" class="archive">
    <div class="container">
      <h1 class="row archive-title">{{ category.name }}</h1>
      <posts :data="posts" />
    </div>
  </section>
</template>

<script>
  import Posts from '../../components/Posts'

  export default {
      components: {
          Posts
      },
      name: 'category-index',
      props: ['slug'],
      data() {
          return {
              posts: null,
              category: null
          }
      },
      mounted() {
          this.$wp
              .categories()
              .slug(this.slug)
              .then(
                  function(cats) {
                      this.category = cats[0]
                      return this.$wp.posts().categories(this.category.id)
                  }.bind(this)
              )
              .then(
                  function(data) {
                      this.posts = data
                  }.bind(this)
              )
      },
      methods: {}
  }
</script>

<style lang="stylus" scoped>
  .archive-title
    justify-content center
    margin-bottom 25px
    font-size 50px
</style>
