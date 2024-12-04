<script setup lang="ts">

</script>

<template>
<div class="absolute left-1/2 bottom-1/2
            transform
            -translate-x-1/2
            translate-y-1/2

            w-[72.5vw] h-[75vh] p-5

            backdrop-blur-[3px]
            backdrop-contrast-[1.1]
            bg-centerBg

            shadow-panel-shadow
            rounded-[40px]
            ">
  <div class="w-full h-full
                flex flex-col items-center
                overflow-y-auto
">
    <slot name="avator"></slot>
    <slot name="description"></slot>
    <slot name="social-media"></slot>
  </div>
</div>
</template>

<style scoped>

</style>