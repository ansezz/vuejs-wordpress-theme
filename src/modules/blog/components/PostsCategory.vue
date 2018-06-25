<template>
    <posts v-if="posts" :title="category.name" :data="posts" />
</template>

<script>
    import Posts from './Posts'

    export default {
        components: {
            Posts
        },
        name: 'categoryHome',
        props: {
            slug: {
                type: String,
                required: true
            },
            limit: {
                type: Number,
                default: 10
            }
        },
        data: function() {
            return {
                loading: false,
                posts: null,
                category: null
            }
        },
        created() {
            this.loading = true
            this.$wp
                .categories()
                .slug(this.slug)
                .then(
                    function(cats) {
                        this.category = cats[0]
                        return this.$wp
                            .posts()
                            .categories(this.category.id)
                            .perPage(this.limit)
                    }.bind(this)
                )
                .then(
                    function(data) {
                        this.loading = false
                        this.posts = data
                    }.bind(this)
                )
        }
    }
</script>

<style lang="stylus" scoped>
</style>
