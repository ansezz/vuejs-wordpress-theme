<template>
  <section>
    <q-card inline class="q-ma-sm" v-for="(item , key) in posts" :key="key" style="width: 40%">
      <q-card-media>
        <router-link :to="{name : 'blog.post' , params : {slug : item.slug}}">
          <img :src="item.featured_image_src" :alt="item.title.rendred">
        </router-link>
      </q-card-media>
      <q-card-title>
        <router-link :to="{name : 'blog.post' , params : {slug : item.slug}}">
          <span v-html="item.title.rendered"></span>
        </router-link>
      </q-card-title>
      <q-card-main>
        <p v-html="item.excerpt.rendered"></p>
      </q-card-main>
      <q-card-separator/>
      <q-card-actions>
        <router-link :to="{name : 'blog.post' , params : {slug : item.slug}}">
          <q-btn flat color="primary" label="Red more"/>
        </router-link>
      </q-card-actions>
    </q-card>
  </section>
</template>

<style>
</style>

<script>
  export default {
    name: 'index-blog',
    data () {
      return {
        posts: null,
        loading: false
      }
    },
    mounted () {
      this.loading = true
      this.$wp.posts()
        .then(function (data) {
          this.posts = data
          this.loading = true
        }.bind(this))
    },
    methods: {}
  }
</script>
