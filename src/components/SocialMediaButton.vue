<script setup lang="ts">
import {config} from "../assets/config";

defineProps<{
  title: string,
  url: string
}>();

const buttoncolor = config.theme.buttonColor
</script>

<template>
  <div class="container bg-red-900">
    <a :href="url" target="_blank">{{ title }}</a>
  </div>
</template>

<style scoped>
  div{
    display: block;
  }
</style>
