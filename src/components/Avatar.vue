<script setup lang="ts">
import {config} from "../assets/config.ts";

const url = config.Avatar.url
</script>

<template>
  <div class="container max-w-[256px] h-auto min-w-[190px] w-[27.242%]:">
    <img :src="url" alt="Meow's avator" class="rounded-full object-contain">
  </div>
</template>

<style scoped>

</style>