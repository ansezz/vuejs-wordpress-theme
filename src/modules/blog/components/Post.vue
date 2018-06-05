<template>
  <article class="card is-laravel">
    <header class="card-header">
      <router-link class="card-image" :to="{ name: 'blog.post', params : { slug: item.slug } }">
        <img :src="item.featured_image_src" :alt="item.title.rendred">
      </router-link>
    </header>
    <main class="card-main">
      <router-link class="card-category" to="">Laravel</router-link>
      <h2 class="card-title">
        <router-link v-html="item.title.rendered" :to="{ name: 'blog.post', params: { slug: item.slug } }"></router-link>
      </h2>
      <p class="card-excerpt" v-html="item.excerpt.rendered"></p>
    </main>
  </article>
</template>

<script>
  export default {
      name: 'Post',
      props: ['item']
  }
</script>

<style lang="stylus" scoped>
  .card
    position relative
    overflow hidden
    margin-bottom 20px
    padding 10px
    border-radius 6px
    box-shadow 0 0 25px rgba(#282F3C, .05), 0 20px 25px rgba(#282F3C, .05), 0 3px 4px rgba(#282F3C, .05)
    transition .35s transform, .35s box-shadow, .35s opacity
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
    padding-top 45%
    width 100%
    border-radius 6px
    box-shadow 0 0 0 1px rgba(#000, .06)

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
    padding 15px

  .card-category
    position absolute
    top 20px
    right 20px
    background-color var(--default)
    color #FFF

  .card.is-laravel:hover .card-category
    background-color var(--laravel)

  .card.is-vuejs:hover .card-category
    background-color var(--vuejs)

  .card-title a
    display block
    overflow hidden
    height 20px * 2
    color var(--default)
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

  .card-excerpt
    display none
</style>
