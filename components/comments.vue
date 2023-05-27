<script lang="ts" setup>
const activeTab = ref(0); // Set the initial active tab
const tabs = ref([
  {
    name: "Michael Gough",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    position: "Web developer at Google",
  },
  {
    name: "Bonnie Green",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    position: " CEO at Facebook",
  },
  {
    name: "Karen Nelson",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
    position: "CTO at Amazon",
  },
]);
const tabItems = ref([
  {
    title: "It was a great experience!",
    desc: `Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application.`,
  },
  {
    title: "Best product!",
    desc: `lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              aliquet, est eu volutpat semper, justo mi feugiat leo, ut
              pharetra erat odio nec velit. Integer euismod, nibh nec
              tincidunt suscipit, augue massa convallis nisl, id blandit
              odio felis quis ligula.`,
  },
  {
    title: "Great design!",
    desc: `another description lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam aliquet, est eu volutpat semper, justo mi
              feugiat leo, ut pharetra erat odio nec velit. Integer euismod,
              nibh nec tincidunt suscipit, augue massa convallis nisl, id
              blandit odio felis quis ligula.`,
  },
]);

</script>
<template>
  <section class="bg-dark dark:bg-gray-900">
    <div
      class="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6"
    >
      <div class="text-gray-500 sm:text-lg dark:text-gray-400">
        <ul
          class="block mb-3 space-y-4 sm:flex sm:space-y-0 lg:space-y-4 lg:block"
          id="testimonialTab"
          role="tablist"
        >
          <li
            class="md:mr-2 lg:mr-0"
            role="presentation"
            v-for="(tab, index) in tabs"
            :key="index"
          >
            <button
              class="p-4 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              @click="activeTab = index"
            >
              <figcaption class="space-y-2">
                <div class="flex space-x-2.5">
                  <img
                    class="w-6 h-6 rounded-full"
                    :src="tab.avatar"
                    alt="profile picture"
                  />
                  <div
                    class="text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    {{ tab.name }}
                  </div>
                </div>
                <div
                  class="text-sm font-light text-left text-gray-500 dark:text-gray-400"
                >
                  {{ tab.position }}
                </div>
              </figcaption>
            </button>
          </li>
        </ul>
        <a
          class="inline-flex items-center pl-4 text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          href="#"
        >
          View other 20 testimonials
          <svg
            class="ml-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div class="col-span-2 mt-4 lg:mt-0">
        <transition-group
          name="slide"
          v-for="(tabItem, index) in tabItems"
          :key="index"
        >
          <div
            class="p-4 rounded-lg shadow-sm hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition duration-300 ease-in-out mb-4"
            :key="index"
            v-show="activeTab === index"

          >
            <svg
              class="mb-3 h-8 text-gray-500 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <h3
              class="mb-3 text-2xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white"
            >
              {{ tabItem.title }}
            </h3>
            <p
              class="mb-3 text-lg font-light leading-relaxed text-gray-500 dark:text-gray-400"
            >
              {{ tabItem.desc }}
            </p>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0.5;
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>
