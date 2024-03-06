<script setup>
import PostListItem from "./postListItem.vue";
const props = defineProps({
  postList: Object
})
</script>

<template>
  <div class="posts_container">
    <template  v-for="post in props.postList" :key="post?.id">
       <PostListItem v-if="post" :post="post"/>
    </template>
  </div>
</template>

<style scoped lang="scss">
.posts_container{
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  margin: auto;
}
</style>