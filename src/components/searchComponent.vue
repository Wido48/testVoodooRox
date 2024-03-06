<script setup>
  import {ref} from "vue";
  import { usePostsStore } from "../stores/posts.store.js";

  let textValue = ref()
  function searchFunction(){
    usePostsStore().filteringPostByString(textValue.value.toLowerCase())
  }
</script>

<template>
  <div class="search">
    <input type="text" placeholder="Введие текст" v-model="textValue" @input="searchFunction()">
  </div>
</template>

<style scoped lang="scss">
.search{
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    color:#18191B;
    width: 25rem;
    border-radius: 2rem;
    padding: 1rem;
    border: 0;
  }
}
</style>