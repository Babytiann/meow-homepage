<script setup lang="ts">
import {config} from "../assets/config.ts";

const url = config.Avatar.url
</script>

<template>
  <div class="container max-w-[256px] h-auto min-w-[190px] w-[27.242%]

              hover:scale-[1.12]
              hover:m-7
              hover:shadow-[0_0_18px_rgb(0,0,0,0.3)]
              hover:cursor-pointer

              rounded-full
              duration-[350ms]
  ">
    <img :src="url" alt="Meow's avator" class="rounded-full object-contain">
  </div>
</template>

<style scoped>

</style>