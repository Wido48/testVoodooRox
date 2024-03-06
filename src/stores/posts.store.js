import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getPostsFromRequest } from "../services/posts.service.js";


export const usePostsStore = defineStore('posts', () => {
    const posts = ref( undefined )
    const filteredPosts = ref(undefined)

    const updatePostsLists = async () => {
        posts.value = await getPostsFromRequest()
        filteredPosts.value = posts.value
    }

    const filteringPostByString = async (string) => {
        filteredPosts.value = posts.value
        if (string.length > 0){
            filteredPosts.value = filteredPosts.value.filter((post) => {
                if (post?.userInfo.name.toLowerCase().includes(string)){
                    return post
                }
            })
        }
    }

    return {
        posts,
        filteredPosts,
        updatePostsLists,
        filteringPostByString
    }
})
