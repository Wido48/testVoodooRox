<script setup>
defineProps({
  post: Object
})

</script>

<template>
  <div class="post">
    <h1>{{ post?.title }}</h1>
    <p>
      {{post?.body}}
    </p>
    <p class="author">
      {{post?.userInfo?.name}}
    </p>
  </div>
</template>

<style scoped lang="scss">

.post{
  width: 42.5rem;
  height: auto;
  padding: 1rem 2rem;
  background: white;
  color: #18191B;
  border-radius: 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.author{
  color: #4a73d2;
}


@media screen and (min-width: 1025px) and (max-width: 1440px)  {
  .post{
    width: 40rem;
    height: auto;
  }
}

@media screen and (max-width: 1024px)  {
  .post{
    width: 100%;
    height: auto;
  }
}
</style>