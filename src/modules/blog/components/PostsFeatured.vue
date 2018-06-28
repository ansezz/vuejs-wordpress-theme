<template>
  <section class="featured">
    <div class="container">
      <section class="cards">
        <div class="container is-fluid is-paddingless">
          <post v-for="(item , key) in posts" :key="key" :item="item"></post>
        </div>
      </section>
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
          this.$wp
              .posts()
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

<style lang="stylus" scoped>
  .featured
    padding-bottom 30px
    border-bottom 1px solid rgba(#000, .08)

  .cards
    padding-bottom 20px

    .container
      display grid
      grid-template-columns repeat(3, 1fr)
      grid-template-rows repeat(3, auto)
      grid-gap 20px

  .card
    margin 0 !important
    max-width 100% !important
    width 100% !important
    background-color #2a2a2a

    &:hover >>> .card-title a
    & >>> .card-title a
      color #fff !important

  .card:first-child
    grid-column 1 / 3
    grid-row 1 / 3

    & >>> .card-title a
      height 30px * 1
      text-overflow ellipsis
      white-space nowrap
      font-size 18px
      line-height 30px

    & >>> .card-excerpt
      display block
      margin-top 15px
      color rgba(#fff, .8)
</style>
