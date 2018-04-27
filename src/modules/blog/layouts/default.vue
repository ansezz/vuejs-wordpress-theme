<template>
  <div>
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './header'
  import appFooter from './footer'

  export default {
    name: 'Layout-default-blog',
    components: {
      appFooter,
      appHeader
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
