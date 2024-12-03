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
              h-[50px] w-[128px] min-w-[82px]
              m-3

              border-solid
              border-[1px]
              border[rgba(0, 0, 0, 0.1)]
              rounded-2xl

              shadow-lg
              hover:shadow-button-shadow
              hover:scale-[1.12]
              duration-[350ms]

              overflow-hidden
    ">
    <a :href="url" target="_blank" class="
              inline-flex
              h-full w-full
              justify-center items-center
              tracking-wide
             text-grey1
             focus:border-purple-300">
      <span>{{ title }}</span>
    </a>
  </div>
</template>

<style scoped>
  a{
    outline-color: transparent;
    text-decoration: none;
  }
</style>
