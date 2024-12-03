<script setup lang="ts">
import SMButton from "./components/SocialMediaButton.vue"
import BackGround from "./components/BackGround.vue";
import Avatar from "./components/Avatar.vue";
import Main from "./components/CenterArea.vue";

import {config} from "./assets/config.ts";
</script>

<template>
  <BackGround ></BackGround>


  <Main>
    <template #avator>
      <Avatar />
    </template>
    <template #description class="text-grey">
      <h1 class="text-[2.5rem] font-bold">{{config.name.first}}</h1>
      <p class="text-lg">{{config.slogan.value}}</p>
    </template>
    <template #social-media>
      <div v-if="config.button" class="flex flex-row flex-wrap ">
        <template v-for="item in config.button" :key="item.id">
          <SMButton :title="item.title" :url="item.url"></SMButton>
        </template>
      </div>
    </template>
  </Main>
</template>

<style scoped>

</style>
