<template>
  <section>
    <div v-if="post">
      <h1 v-html="post.title.rendered"></h1>
      <div v-html="post.content.rendered"></div>
      <div v-if="post['jetpack-related-posts']">
        <ul>
          <li v-for="(item,key) in post['jetpack-related-posts']" :key="key">
            <span>{{item.title}}</span>
            <p>{{item.excerpt}}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
</style>

<script>
  export default {
      name: 'blog-index',
      props: ['slug'],
      data() {
          return {
              post: null,
              categories: null,
              loading: true
          }
      },
      computed: {},
      mounted() {
          this.$wp
              .posts()
              .slug(this.slug)
              .then(data => {
                  this.loading = false
                  this.post = data[0]
                  //  this.getCategories()
              })
      },
      methods: {
          getCategories() {
              console.log('getCategories')
              /* if (this.post.categories) {
                this.$wp.categories().id(this.post.categories[0]).then(data => {
                  console.log(data)
                  this.categories = data[0]
                })
              } */
          }
      }
  }
</script>
