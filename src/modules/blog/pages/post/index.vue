<template>
  <section class="single">
    <div v-if="post" class="container">

      <h1 class="row single-title" v-html="post.title.rendered"></h1>

      <header class="row single-header">
        <div class="single-image">
          <img :src="post.featured_image_src.large" :alt="post.title.rendered">
        </div>
      </header>

      <main class="row single-main">
        <div class="container">
          <div class="column is-large">
            <div class="single-content" v-html="post.content.rendered"></div>
          </div>
          <div class="column is-small">
            <div class="pub">
              <img src="http://via.placeholder.com/300x250" alt="">
            </div>
          </div>
        </div>
      </main>

      <footer v-if="post['jetpack-related-posts']" class="row single-footer">
        <posts title="Related Posts" :data="post['jetpack-related-posts']" />
      </footer>
    </div>
  </section>
</template>

<script>
  import Posts from '../../components/Posts'

  export default {
      components: {
          Posts
      },
      name: 'blog-index',
      props: ['slug'],
      data() {
          return {
              post: null,
              categories: null,
              loading: true
          }
      },
      computed: {},
      mounted() {
          this.$wp
              .posts()
              .slug(this.slug)
              .then(data => {
                  this.loading = false
                  this.post = data[0]
                  //  this.getCategories()
              })
      },
      methods: {
          getCategories() {
              console.log('getCategories')
          }
      }
  }
</script>

<style lang="stylus" scoped>
  .single > .container
    overflow hidden
    padding 0
    border-radius 6px
    background-color #FFF
    box-shadow 0 0 0 1px rgba(#000, .06)

  .single-main > .container
    padding 20px
    lost-center 100% 20px

  .single-footer
    padding 20px 20px 0

  .single-title
    justify-content center
    margin 30px 20px
    font-size 35px

  .single-image
    position relative
    display block
    overflow hidden
    padding 0
    // padding-top 56.25%
    padding-top 45%
    width 100%
    border-bottom 1px solid rgba(#000, .06)

    &:before
      display block
      content ''

  .single-image img
    position absolute
    top 0
    bottom 0
    left 0
    width 100%
    height 100%
    border none
    object-fit cover

  .single-content
    $content-size = 14px

    font-size $content-size

    & >>> p > img
      width 100%

    & >>> li + li
      margin-top $content-size - 75%

    & >>> li + li
      // Block

    & >>> p
    & >>> ol
    & >>> ul
    & >>> table
      &:not(:last-child)
        margin-bottom $content-size

    & >>> h1
    & >>> h2
    & >>> h3
    & >>> h4
    & >>> h5
    & >>> h6
      font-weight bold
      line-height 1.13

    & >>> h1
      margin-bottom $content-size - 50%
      font-size $content-size * 2

      &:not(:first-child)
        margin-top $content-size

    & >>> h2
      margin-bottom $content-size - 43%
      font-size $content-size + 75%

      &:not(:first-child)
        margin-top $content-size + 14%

    & >>> h3
      margin-bottom $content-size - 34%
      font-size $content-size + 50%

      &:not(:first-child)
        margin-top $content-size + 33%

    & >>> h4
      margin-bottom $content-size - 20%
      font-size $content-size + 25%

    & >>> h5
      margin-bottom $content-size - 17%
      font-size $content-size + 13%

    & >>> h6
      margin-bottom $content-size
      font-size $content-size

    & >>> ol
      margin-top $content-size
      margin-right $content-size * 2
      margin-left $content-size * 2
      list-style decimal outside

    & >>> ul
      margin-top $content-size
      margin-right $content-size * 2
      margin-left $content-size * 2
      list-style disc outside

      ul
        margin-top $content-size - 50%
        list-style-type circle

        ul
          list-style-type square
</style>
