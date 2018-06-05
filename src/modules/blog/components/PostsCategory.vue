<template>
  <section class="cards">
    <header class="cards-header">
      <h1 class="cards-title">{{ category.name }}</h1>
      <router-link class="cards-more" to="">View all</router-link>
    </header>
    <div class="container is-fluid is-paddingless">
      <post v-for="(item , key) in posts" :key="key" :item="item"></post>
    </div>
  </section>
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
                      return this.$wp
                          .posts()
                          .categories(this.category.id)
                          .perPage(this.limit)
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

<style lang="stylus" scoped>
  .cards
    padding-bottom 20px

    .container:hover .card
      opacity .5

    .container:hover .card:hover
      opacity 1

  .cards-header
    display flex
    align-items center
    height 100px

  .cards-title
    display flex
    flex 1 0 auto
    align-items center
    font-weight 600
    font-size 23px

    &:after
      display flex
      flex 1 0 auto
      margin 0 50px
      height 5px
      background-color rgba(#000, .04)
      content ''
      transform translate3d(0, 3px, 0)

  .cards-more
    // text-decoration none
</style>
