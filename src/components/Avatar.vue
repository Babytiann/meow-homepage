<script setup lang="ts">
import {config} from "../assets/config.ts";

const url = config.Avatar.url
</script>

<template>
  <div class="container w-[256px] h-auto">
    <img :src="url" alt="Meow's avator" class="rounded-full object-contain">
  </div>
</template>

<style scoped>

</style>