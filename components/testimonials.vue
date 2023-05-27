<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8  mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Testimonials
        </h2>
        <p
          class="mb-8 font-light text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl"
        >
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div class="grid gap-8 lg:grid-cols-3 overflow-hidden relative xl:-mx-6   mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        <div class="space-y-6 py-4 animate-first">
          <figure
           v-for="(item) in testimonialsFirstRow" 
           :key="item"
            class="p-6 bg-gray-50 rounded dark:bg-gray-800" :style="item.animationDelay" >
            <blockquote class="text-sm text-gray-500 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
               {{item.message.title}}
              </h3>
              <p class="my-4">
               {{item.message.des}}
              </p>
            </blockquote>
            <figcaption class="flex items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                :src="item.user.profilePic"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white">
                <div>{{item.user.name}}</div>
                <div
                  class="text-sm font-light text-gray-500 dark:text-gray-400"
                >
                  {{item.user.job}}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="space-y-6 py-4 animate-second">
            <figure
           v-for="(item) in testimonialsSecondRow" 
           :key="item"
            class="p-6 bg-gray-50 rounded dark:bg-gray-800" :style="item.animationDelay" >
            <blockquote class="text-sm text-gray-500 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
               {{item.message.title}}
              </h3>
              <p class="my-4">
               {{item.message.des}}
              </p>
            </blockquote>
            <figcaption class="flex items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                :src="item.user.profilePic"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white">
                <div>{{item.user.name}}</div>
                <div
                  class="text-sm font-light text-gray-500 dark:text-gray-400"
                >
                  {{item.user.job}}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="space-y-6 py-4 animate-third">
          <figure
           v-for="(item) in testimonialsThirdRow" 
           :key="item"
            class="p-6 bg-gray-50 rounded dark:bg-gray-800" :style="item.animationDelay" >
            <blockquote class="text-sm text-gray-500 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
               {{item.message.title}}
              </h3>
              <p class="my-4">
               {{item.message.des}}
              </p>
            </blockquote>
            <figcaption class="flex items-center space-x-3">
              <img
                class="w-9 h-9 rounded-full"
                :src="item.user.profilePic"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white">
                <div>{{item.user.name}}</div>
                <div
                  class="text-sm font-light text-gray-500 dark:text-gray-400"
                >
                  {{item.user.job}}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-gray-900 "></div>
        <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 "></div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { firstRow,secondRow,thirdRow} from "../data/testimonials/testimonials";

const testimonialsFirstRow=ref(firstRow)
const testimonialsSecondRow=ref(secondRow)
const testimonialsThirdRow=ref(thirdRow)

</script>
<style scoped>
.animate-first{
  --marquee-duration: 21000ms;
  animation: marquee var(--marquee-duration) linear infinite;
}
.animate-second{
  --marquee-duration: 13000ms;
  animation: marquee var(--marquee-duration) linear infinite;
}
.animate-third{
  --marquee-duration: 33215ms;
  animation: marquee var(--marquee-duration) linear infinite;
}
.animate figure {
  animation: fade-in 0.5s linear forwards;
  opacity: 0;
}
@keyframes marquee {
  100% {
    transform: translateY(-50%);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>