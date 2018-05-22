<template>
  <section v-if="category">
    <h1> {{category.name}}</h1>
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
    name: 'category-index',
    props: ['slug'],
    data () {
      return {
        posts: null,
        category: null
      }
    },
    mounted () {
      this.$wp.categories().slug(this.slug)
        .then(function (cats) {
          this.category = cats[0]
          return this.$wp.posts().categories(this.category.id)
        }.bind(this))
        .then(function (data) {
          this.posts = data
        }.bind(this))
    },
    methods: {}
  }
</script>
