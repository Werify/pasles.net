<template>
  <HeroSec />

  <Comments />

  <Features />
  <Download />
  <Testimonials />

  <Pricing />

  <Faq />
</template>
<script setup lang="ts">
import { Tabs } from "flowbite";
const active = ref(false);
const activeTab = () => {
  active.value = true;
};
onMounted(() => {
  // create an array of objects with the id, trigger element (eg. button), and the content element
  const tabElements = [
    {
      id: "testimonial-1",
      triggerEl: document.querySelector("#testimonial-1-tab"),
      targetEl: document.querySelector("#testimonial-1"),
    },
    {
      id: "testimonial-2",
      triggerEl: document.querySelector("#testimonial-2-tab"),
      targetEl: document.querySelector("#testimonial-2"),
    },
    {
      id: "testimonial-3",
      triggerEl: document.querySelector("#testimonial-3-tab"),
      targetEl: document.querySelector("#testimonial-3"),
    },
  ];

  // options with default values
  const options = {
    defaultTabId: "settings",
    activeClasses: "bg-gray-100 dark:bg-gray-700",
    inactiveClasses: "bg-white dark:bg-gray-900",
    onShow: () => {},
  };

  const tabs = new Tabs(tabElements, options);
});
</script>
