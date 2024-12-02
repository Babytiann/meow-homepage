<script setup lang="ts">

defineProps<{
  title: string,
  url: string
}>();

</script>

<template>
  <div class="container
              bg-white/30
              backdrop-blur-[2px]
              h-[50px] w-[128px]

              border-solid
              border-[1px]
              border[rgba(0, 0, 0, 0.1)]
              rounded-2xl

              shadow-lg
              hover:shadow-button-shadow
              hover:scale-[1.12]
              duration-[350ms]
    ">
    <a :href="url" target="_blank" class="
              inline-flex
              h-full w-full
              justify-center items-center
              tracking-wide
             text-grey1
             focus:border-purple-300
              ">{{ title }}</a>
  </div>
</template>

<style scoped>
  a{
    outline-color: transparent;
    text-decoration: none;
  }

</style>
