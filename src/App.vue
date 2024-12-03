<script setup lang="ts">
import SMButton from "./components/SocialMediaButton.vue"
import BackGround from "./components/BackGround.vue";
import Avatar from "./components/Avatar.vue";
import Main from "./components/CenterArea.vue";
</script>

<template>
  <BackGround ></BackGround>


  <Main>
    <template #avator>
      <Avatar />
    </template>
    <template #description>
      111
    </template>

  </Main>
</template>

<style scoped>

</style>
