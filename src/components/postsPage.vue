<script setup>
  import {usePostsStore} from "../stores/posts.store.js";
  import {storeToRefs} from "pinia";
  import SearchComponent from "./searchComponent.vue";
  import PostList from "./postList.vue";
  const postList = storeToRefs(usePostsStore())
</script>

<template>
<div class="container" v-if="postList.filteredPosts.value !== undefined">
  <SearchComponent />
  <postList :postList="postList.filteredPosts.value" />
</div>
<div v-else-if="true" class="error">
  <p>
    Кажется, что- то пошло не так 😢
  </p>
</div>
</template>

<style lang="scss" scoped>
.container{
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.error{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

</style>
