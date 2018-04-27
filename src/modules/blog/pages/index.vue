<template>
  <section>
    <h1>Index</h1>
    <ul>
      <li>Posts</li>
      <li>
        <router-link :to="{name : 'blog.post' , params : {slug : 'hello-word'}}"> Hello Word</router-link>
      </li>
      <li>
        <router-link :to="{name : 'blog.post' , params : {slug : 'hello-word-2'}}"> Hello Word 2</router-link>
      </li>
    </ul>

    <ul>
      <li>Categories</li>
      <li>
        <router-link :to="{name : 'blog.category' , params : {slug : 'category'}}">Category</router-link>
      </li>
      <li>
        <router-link :to="{name : 'blog.category' , params : {slug : 'category-1'}}">Category 1</router-link>
      </li>
      <li>
        <router-link
          :to="{name : 'blog.category' , params : {slug : 'category',slug1 : 'sub-category',slug2 : 'sub-sub-category'}}">
          Sub Sub Category
        </router-link>
      </li>
    </ul>
    <ul>
      <li>tags</li>
      <li>
        <router-link :to="{name : 'blog.tag' , params : {slug : 'tag'}}">Tag</router-link>
      </li>
      <li>
        <router-link :to="{name : 'blog.tag' , params : {slug : 'tag-1'}}">Tag 1</router-link>
      </li>
    </ul>
    <ul>
      <li>Author</li>
      <li>
        <router-link :to="{name : 'blog.author' , params : {username: 'anass'}}">Anass</router-link>
      </li>
      <li>
        <router-link :to="{name : 'blog.author' , params : {username : 'omar'}}">Omar</router-link>
      </li>
    </ul>
    <ul>
      <li>Search</li>
      <li>
        <router-link :to="{name : 'blog.search' , query : { s: 'laravel' } }">Laravel</router-link>
      </li>
      <li>
        <router-link :to="{name : 'blog.search' , query : { s : 'vuejs' } }">VueJs</router-link>
      </li>
    </ul>
  </section>
</template>

<style>
</style>

<script>
  export default {
    name: 'index-blog',
    data () {
      return {}
    },
    methods: {}
  }
</script>
