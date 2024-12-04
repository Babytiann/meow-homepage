<script setup lang="ts">
import SMButton from "./components/SocialMediaButton.vue"
import BackGround from "./components/BackGround.vue";
import Avatar from "./components/Avatar.vue";
import Main from "./components/CenterArea.vue";

import {config} from "./assets/config.ts";
</script>

<template>
  <BackGround ></BackGround>


  <Main class="selection:bg-rose-200 selection:text-white">
    <template #avator>
      <Avatar />
    </template>
    <template #description class="text-grey">
      <div class="text-center">
        <h1 class="text-[2.3rem] lg:text-[2.8rem]  font-bold en">{{config.name.first}}</h1>
        <p class="text-lg leading-loose pl-2

                  bg-no-repeat
                  bg-left-bottom
                  bg-[linear-gradient(to_right,_#f9a8d4,_#ec4899)]
                  rounded-lg

                  hover:text-white

                  transition-bgs-color
                  duration-350
                  ease-in-out

                  cn description
         ">{{config.slogan.value}}</p>
      </div>
    </template>
    <template #social-media>
      <div v-if="config.button" class="flex flex-row flex-wrap justify-center en">
        <template v-for="item in config.button" :key="item.id">
          <SMButton :title="item.title" :url="item.url"></SMButton>
        </template>
      </div>
    </template>
  </Main>
</template>

<style scoped>
.description {
  background-size: 100% 2px; /* 设置背景高度为 2px */
}

.description:hover {
  background-size: 100% 100%; /* 悬浮时背景覆盖整个内容 */
}
</style>
