<template>
  <header class="header">
    <div class="container">

      <router-link :to="{ name: 'blog.index' }">{{ settings.title }}</router-link>

      <ul class="header-list">
        <li v-for="(item, index) in settings.menus.header" :key="index">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>

      <ul class="social-list">
        <li v-for="(item, index) in settings.social" :key="index">
          <a target="_blank" :href="item.url">
            <i :class="'fab fa-' + item.title.toLowerCase()"></i>
          </a>
        </li>
      </ul>

      <form class="header-search" action="">
        <input type="search" name="s" placeholder="Search">
        <button type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>

    </div>
  </header>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
      name: 'Layout-header-blog',
      data() {
          return {
              state: true,
              reveal: true
          }
      },
      computed: {
          ...mapState({
              leftDrawerOpen: state => state.leftDrawerOpen,
              settings: state => state.blog.settings
          })
      },
      methods: {
          ...mapActions(['toggleLeftDrawer'])
      }
  }
</script>

<style lang="stylus" scoped>
  a
    color var(--default)

  .header
    display flex
    align-items center
    margin-bottom 30px
    height 80px
    border-top 3px solid var(--laravel)
    border-bottom 1px solid rgba(#000, .08)
    background-color #FFF

  .container
    align-items baseline
    width 100%

  .header-list
  .social-list
    display flex
    font-size 13px

    & li:not(:last-child)
      margin-right 20px

  .header-list
    margin-right auto

    a
      display flex
      flex-direction column
      padding 5px 5px 0
      transition .45s color

      &:after
        margin-top 5px
        max-width 0
        width 0
        height 2px
        border-radius 3px
        background-color var(--laravel)
        content ''
        transition .5s max-width

      &:hover
      &.router-link-exact-active
        color var(--laravel)

        &:after
          max-width 100px
          width auto

  .social-list
    .fab
      transition .25s color

    .fa-facebook:hover
      color #3b5998

    .fa-twitter:hover
      color #1da1f2

    .fa-instagram:hover
      color #e1306c

  .header-search
    position relative
    margin-left 25px
    height 40px

    input
      padding 0 40px 0 10px
      height 100%
      outline none
      border 1px solid rgba(#000, .08)
      border-radius 6px

    button
      position absolute
      top 0
      right 0
      bottom 0
      width 40px
      outline none
      border none
      background-color transparent
      box-shadow none
      font-size 12px
      cursor pointer
      transition .25s opacity

      &:hover
        opacity .6
</style>
