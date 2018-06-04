<template>
  <section>
    <div class="container">
      <article class="card" v-for="(item , key) in posts" :key="key">
        <header class="card-header">
          <router-link class="card-image" :to="{ name: 'blog.post', params : { slug: item.slug } }">
            <img :src="item.featured_image_src" :alt="item.title.rendred">
          </router-link>
        </header>
        <main class="card-main">

          <h2 class="card-title">
            <router-link v-html="item.title.rendered" :to="{ name: 'blog.post', params: { slug: item.slug } }"></router-link>
          </h2>
          <!-- <q-card-main>
            <p v-html="item.excerpt.rendered"></p>
          </q-card-main> -->
        </main>
      </article>
    </div>
  </section>
</template>

<style>
</style>

<script>
  export default {
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
  .cards
    //

  .card
    position relative
    overflow hidden
    margin-bottom 20px
    border-radius 6px
    box-shadow 0 0 25px rgba(#282F3C, .05), 0 20px 25px rgba(#282F3C, .05), 0 3px 4px rgba(#282F3C, .05)
    transition .35s transform, .35s box-shadow
    lost-column (1 / 3) 3 20px

    &:hover
      box-shadow 0 0 25px rgba(#282F3C, .08), 0 20px 25px rgba(#282F3C, .08), 0 3px 4px rgba(#282F3C, .08)
      transform translate3d(0, -3px, 0)

      .card-image img
        transform scale(1)

      .card-title a
        color #000

  .card-image
    position relative
    display block
    overflow hidden
    padding 0
    // padding-top 56.25%
    padding-top 42%
    width 100%

    &:before
      display block
      content ''

  .card-image img
    position absolute
    top 0
    bottom 0
    left 0
    width 100%
    height 100%
    border none
    transition .35s transform
    transform scale(1.02)
    object-fit cover

  .card-main
    padding 30px

  .card-title a
    color var(--default)
    text-decoration none
    font-weight 600
    line-height 20px
    transition .35s color

    &:before
      position absolute
      top 0
      bottom 0
      left 0
      z-index 10
      width 100%
      height 100%
      content ''
</style>
