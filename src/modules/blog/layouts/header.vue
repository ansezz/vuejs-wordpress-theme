<template>
  <header>
    <ul>
      <li>
        <router-link :to="{name:'blog.index'}"> Home</router-link>
      </li>
      <li>
        <router-link :to="{name:'blog.login'}"> Login</router-link>
      </li>
      <li>
        <router-link :to="{name:'blog.register'}"> Register</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: 'Layout-header-blog',
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
