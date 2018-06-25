<template>
  <section class="row cards">
    <header v-if="title" class="cards-header">
      <h1 class="cards-title">{{ title }}</h1>
      <router-link class="cards-more" to="">View all</router-link>
    </header>
    <div class="container is-fluid is-paddingless">
      <post v-for="(item , key) in data" :key="key" :item="item"></post>
    </div>
  </section>
</template>

<script>
    import Post from './Post'

    export default {
        components: {
            Post
        },
        name: 'Posts',
        props: {
            title: {
                type: String
            },
            data: {
                type: Array
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cards
        padding-bottom 20px

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
