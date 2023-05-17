<template>
  <!-- Pricing Card -->
  <div
    v-for="(cardItem, cardIndex) in items"
    :class="cardIndex == 2 ? 'bg-black' : 'bg-white'"
    class="flex flex-col p-6 mx-auto max-w-xl text-start rounded-3xl shadow-lg xl:max-w-lg dark:border-gray-700 dark:bg-gray-800 xl:p-8">
    <div class="flex space-x-2">
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        class="h-6 w-6 flex-none fill-gray-300">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
      </svg>
      <h3
        :class="cardIndex == 2 ? 'text-gray-300' : 'text-gray-900'"
        class="mb-4 text-md font-medium dark:text-white">
        {{ cardItem.type.text }}
      </h3>
    </div>
    <span
      :class="cardIndex == 2 ? 'text-white' : 'text-gray-900'"
      class="text-5xl font-semibold dark:text-white"
      >{{ cardItem.currency }}{{ cardItem.price }}</span
    >
    <p
      :class="cardIndex == 2 ? 'text-gray-200' : 'text-gray-500 '"
      class="mt-4 mb-1 text-light dark:text-gray-400">
      {{ cardItem.subtitle }}
    </p>

    <a
      href="#"
      :class="
        cardIndex == 2
          ? 'bg-cyan-500 hover:bg-cyan-400'
          : ' bg-gray-900 hover:bg-gray-700'
      "
      class="text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-8 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 dark:focus:ring-gray-600"
      >{{ cardItem.btn }}</a
    >
    <!-- List -->
    <ul role="list" class="space-y-4 text-left dark:text-gray-400">
      <li
        v-for="item in cardItem.features"
        :class="cardIndex == 2 ? 'text-gray-300' : 'text-gray-900'"
        class="flex items-center space-x-3 pb-1 dark:text-gray-300 border-b-2">
        <!-- Icon -->
        <Icon :name="item.icon" class="flex-shrink-0 w-5 h-5" />
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
defineProps({
  items: {
    type: Array as PropType<PricingCard[]>,
  },
});
</script>
