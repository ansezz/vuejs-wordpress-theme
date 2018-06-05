<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'blog.index' }">{{ settings.title }}</router-link>
      <!-- <p class="navbar-description">{{ settings.description }}</p> -->
      <ul class="header-list">
        <li v-for="(item, index) in settings.menus.header" :key="index">
          <router-link :to="item.url">{{ item.title }}</router-link>
        </li>
      </ul>
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
  .header
    margin-bottom 30px
    border-bottom 1px solid rgba(#000, .08)
    background-color #FFF
    // box-shadow 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08)
    // box-shadow 0 4px 8px 0 rgba(#000, .12), 0 2px 4px 0 rgba(#000, .08)

  .container
    justify-content space-between
    align-items center
    height 100px

  .header-list
    display flex

  .router-link-exact-active
    color red
</style>
