<template>
  <section>
    <h1> Category Index</h1>
    <h2>{{slug}}</h2>
    <h3>{{slug1}}</h3>
    <h4>{{slug2}}</h4>
    <h3>{{slug3}}</h3>
  </section>
</template>

<style>
</style>

<script>
  export default {
    name: 'category-index',
    props: ['slug', 'slug1', 'slug2', 'slug3'],
    data () {
      return {}
    },
    methods: {}
  }
</script>
