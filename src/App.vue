<script setup lang="ts">
import SMButton from "./components/SocialMediaButton.vue";
import BackGround from "./components/BackGround.vue";
import Avatar from "./components/Avatar.vue";
import Main from "./components/CenterArea.vue";
import Footer from "./components/Footer.vue";
import { config } from "./assets/config.ts";

import { onMounted, ref } from 'vue';

const showButtons = ref<boolean[]>([]);

onMounted(() => {
  config.button?.forEach((_, index) => {
    setTimeout(() => {
      showButtons.value[index] = true; // 显示每个按钮
    }, 150 * (index+1)); // 每个按钮延迟100ms
  });
});

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
      <!-- 使用 transition-group 和 v-if 控制元素逐个显示 -->
      <transition-group name="fade" tag="div" class="flex flex-row flex-wrap justify-center en">
        <div></div>  <!-- 抵消样式bug --->
        <div v-for="(item, index) in config.button" :key="item.id" v-show="showButtons[index]"
             class="duration-300 ease-out fade-button"
        >
          <SMButton :title="item.title" :url="item.url"></SMButton>
        </div>
      </transition-group>  <!--设置Transition的时候，不需要把这个元素进行特殊的位置设置，他该在哪里就在哪里，这个元素的动画起始位置由enter-from这种来确定，结束为止就是你这个元素应该在的位置，所以不设置依旧生效，除非有特殊想法 --->
    </template>
  </Main>

  <Footer class="selection:bg-rose-200 selection:text-white"/>
</template>

<style scoped>
.description {
  background-size: 100% 2px; /* 设置背景高度为 2px */
}

.description:hover {
  background-size: 100% 100%; /* 悬浮时背景覆盖整个内容 */
}
.fade-button {
  will-change: transform, opacity; /* 告诉浏览器此元素会有动画效果 */
  transition: transform 0.5s ease-out, opacity 0.5s ease-out; /* 使用 transform 和 opacity 动画 */
}

/* 定义 fade 动画的过渡效果 */
.fade-enter-active, .fade-leave-active {
  transform: translateY(-40px);
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
</style>
