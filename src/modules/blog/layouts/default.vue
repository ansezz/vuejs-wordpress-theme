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
      data() {
          return {}
      },
      methods: {}
  }
</script>

<style lang="stylus">
  // Lost
  @lost flexbox flex
  // Minireset
  html
  body
  p
  ol
  ul
  li
  dl
  dt
  dd
  blockquote
  figure
  fieldset
  legend
  textarea
  pre
  iframe
  hr
  h1
  h2
  h3
  h4
  h5
  h6
    margin 0
    padding 0

  h1
  h2
  h3
  h4
  h5
  h6
    font-weight normal
    font-size 100%

  ul
    list-style none

  button
  input
  select
  textarea
    margin 0

  html
    box-sizing border-box

  *
  *:before
  *:after
    box-sizing inherit

  img
  embed
  iframe
  object
  audio
  video
    max-width 100%
    height auto

  iframe
    border none

  table
    border-spacing 0
    border-collapse collapse

  td
  th
    padding 0
    text-align left

  // Custom
  a
    text-decoration none

  // Base
  :root
    --default #2C3E50
    --laravel #F55247
    --vuejs #42B883

  body
    background-color #FAFAFA
    color var(--default)
    font-size 14px
    font-family 'Source Sans Pro', system, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif

  .container
    lost-center 1000px 30px

    &.is-wide
      lost-center 1240px 20px

    &.is-fluid
      lost-center 100% 30px

  .is-paddingless
    padding 0 !important

  .column
    &.is-large
      lost-column 2 / 3 2 20px

    &.is-small
      lost-column 1 / 3 2 20px

      .pub
        display flex
        justify-content center
        padding 3px
        border-radius 3px
        box-shadow 0 0 0 1px rgba(#000, .06)

  .row
    width 100%
    lost-center 100% 0
</style>
