<template>
  <q-layout-header v-model="state" reveal>
    <!-- header content -->
    <q-toolbar color="primary">
      <q-btn
        flat
        dense
        round
        @click="toggleLeftDrawer"
        aria-label="Menu"
      >
        <q-icon name="menu"/>
      </q-btn>

      <q-toolbar-title>
        {{settings.title}}
        <div slot="subtitle">{{settings.description}}</div>
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-header>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Layout-header-blog',
    data () {
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

<style>
</style>
