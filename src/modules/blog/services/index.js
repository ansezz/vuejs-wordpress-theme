import {http} from 'plugins/http'

//        - Posts
export const posts = (params) => http.get('posts', {params}).then(response => response.data)

//        - Single Post by id
export const singlePostById = (id) => http.get('post/' + id).then(response => response.data)

//        - categories
export const categories = (params) => http.get('categories', {params}).then(response => response.data)

//        - Category by id
export const categoryById = (id) => http.get('categories/' + id).then(response => response.data)

//        - tags
export const tags = (params) => http.get('tags', {params}).then(response => response.data)

//        - tag by id
export const tagById = (id) => http.get('tags/' + id).then(response => response.data)

//        - pages
export const pages = (params) => http.get('pages', {params}).then(response => response.data)

//        - page by id
export const pageById = (id) => http.get('pages/' + id).then(response => response.data)

//        - comments
export const comments = (params) => http.get('comments', {params}).then(response => response.data)

//        - comment by id
export const commentById = (id) => http.get('comments/' + id).then(response => response.data)

//        - media
export const media = (params) => http.get('media', {params}).then(response => response.data)

//        - media by id
export const mediaById = (id) => http.get('media/' + id).then(response => response.data)

//        - users
export const users = (params) => http.get('users', {params}).then(response => response.data)

//        - users by id
export const userById = (id) => http.get('users/' + id).then(response => response.data)
