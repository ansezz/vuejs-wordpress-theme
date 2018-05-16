<template>
  <section>
    <h1>Index Post</h1>
    <h2>{{slug}}</h2>
  </section>
</template>

<style>
</style>

<script>
  import {posts} from './../../services'

  export default {
    name: 'blog-index',
    props: ['slug'],
    data () {
      return {
        post: null
      }
    },
    mounted () {
      posts({slug: this.slug}).then(res => console.log(res))
    },
    methods: {}
  }
</script>
