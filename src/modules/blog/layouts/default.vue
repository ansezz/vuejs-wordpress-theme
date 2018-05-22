<template>
  <q-layout>
    <app-header></app-header>
    <drawer></drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <app-footer></app-footer>
  </q-layout>
</template>

<script>
  import appHeader from './header'
  import appFooter from './footer'
  import drawer from './drawer'

  export default {
    name: 'Layout-default-blog',
    components: {
      appFooter,
      appHeader,
      drawer
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
