<template>
  <q-layout-drawer
    side="left"
    :value.sync="leftDrawerOpen"
    content-class="bg-grey-3"
    :content-style="{padding: '20px'}"
    :overlay="true"
  >
    <q-list
      no-border
      link
      inset-delimiter
    >
      <q-item v-for="(item , key) in settings.menus.header" :key="key">
        <q-item-main>
          <router-link :to="item.url">{{item.title}}</router-link>
        </q-item-main>
      </q-item>
    </q-list>
  </q-layout-drawer>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'Layout-drawer-blog',
    data () {
      return {}
    },
    computed: {
      ...mapState({
        leftDrawerOpen: state => state.leftDrawerOpen,
        settings: state => state.blog.settings
      })
    },
    methods: {}
  }
</script>

<style>
</style>
