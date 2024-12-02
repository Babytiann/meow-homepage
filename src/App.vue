<script setup lang="ts">
import SMButton from "./components/SocialMediaButton.vue"
import BackGround from "./components/BackGround.vue";
</script>

<template>
  <BackGround ></BackGround>

  <div class="relative w-screen h-screen ">
    <SMButton title="GitHub" url="1" class="fixed left-[50%] top-[50%]"></SMButton>
  </div>
</template>

<style scoped>

</style>
