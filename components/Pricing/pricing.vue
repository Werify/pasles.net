<template>
  <section class="bg-dark dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Designed for business teams like yours
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div class="flex justify-center items-center">
          <div class="relative">
            <div
              class="grid grid-cols-2"
              id="headlessui-radiogroup-:R6pm:"
              role="radiogroup">
              <div
                @click="activeItems = dataMonthly"
                :class="
                  activeItems == dataMonthly
                    ? ' bg-cyan-500 text-white font-semibold'
                    : ''
                "
                class="cursor-pointer dark:text-white border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 rounded-l-lg"
                role="radio"
                aria-checked="true"
                tabindex="0">
                Monthly
              </div>
              <div
                @click="activeItems = dataAnnually"
                :class="
                  activeItems == dataAnnually
                    ? 'bg-cyan-500 text-white font-semibold'
                    : ''
                "
                class="cursor-pointer dark:text-white border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 -ml-px rounded-r-lg"
                id="headlessui-radiogroup-option-:Rampm:"
                role="radio"
                aria-checked="false"
                tabindex="-1"
                data-headlessui-state="">
                Annually
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-8 xl:grid-cols-3 xl:gap-10">
        <PricingCard :items="activeItems" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const dataMonthly = ref<PricingCard[]>([
  {
    type: {
      icone: "",
      text: "Starter",
    },
    price: 29,
    currency: "$",
    subtitle: "$19 USD per month, paid annually",
    features: [
      {
        icon: "mdi:credit-card",
        text: "All tools you need to manage payments",
      },
      {
        icon: "mdi:emoticon-outline",
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: "mdi-security",
        text: "Get hundreds of feature updates",
      },
    ],
    btn: "Get started for free",
  },
  {
    type: {
      icone: "",
      text: "Investor",
    },
    price: 199,
    currency: "$",
    subtitle: "$159 USD per month, paid annually",
    features: [
      {
        icon: "mdi:credit-card",
        text: "All tools you need to manage payments",
      },
      {
        icon: "mdi:emoticon-outline",
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: "mdi-security",
        text: "Comprehensive security",
      },
      {
        icon: "mdi-update",
        text: "Get hundreds of feature updates",
      },
      {
        icon: "mdi-fire",
        text: "Payouts to your bank account",
      },
    ],
    btn: "Subscribe",
  },
  {
    type: {
      icone: "",
      text: "VIP",
    },
    price: 599,
    currency: "$",
    subtitle: "$499 USD per month, paid annually",
    features: [
      {
        icon: "mdi:credit-card",
        text: "All tools you need to manage payments",
      },
      {
        icon: "mdi:emoticon-outline",
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: "mdi-security",
        text: "Comprehensive security",
      },
      {
        icon: "mdi-update",
        text: "Get hundreds of feature updates",
      },
      {
        icon: "mdi-fire",
        text: "Payouts to your bank account",
      },
      {
        icon: "mdi-chart-line",
        text: "Financial reconciliation and reporting",
      },
    ],
    btn: "Subscribe",
  },
]);
const dataAnnually = ref<PricingCard[]>([
  {
    type: {
      icone: "",
      text: "Starter",
    },
    price: 79,
    currency: "$",
    subtitle: "$499 USD per month, paid annually",
    features: [
      {
        icon: "mdi:credit-card",
        text: "All tools you need to manage payments",
      },
      {
        icon: "mdi:emoticon-outline",
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: "mdi-security",
        text: "Get hundreds of feature updates",
      },
    ],
    btn: "Get started for free",
  },
  {
    type: {
      icone: "",
      text: "Investor",
    },
    price: 499,
    currency: "$",
    subtitle: "$159 USD per month, paid annually",
    features: [
      {
        icon: "mdi:credit-card",
        text: "All tools you need to manage payments",
      },
      {
        icon: "mdi:emoticon-outline",
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: "mdi-security",
        text: "Comprehensive security",
      },
      {
        icon: "mdi-update",
        text: "Get hundreds of feature updates",
      },
      {
        icon: "mdi-fire",
        text: "Payouts to your bank account",
      },
    ],
    btn: "Subscribe",
  },
  {
    type: {
      icone: "",
      text: "VIP",
    },
    price: 999,
    currency: "$",
    subtitle: "$19 USD per month, paid annually",
    features: [
      {
        icon: "mdi:credit-card",
        text: "All tools you need to manage payments",
      },
      {
        icon: "mdi:emoticon-outline",
        text: "No setup, monthly, or hidden fees",
      },
      {
        icon: "mdi-security",
        text: "Comprehensive security",
      },
      {
        icon: "mdi-update",
        text: "Get hundreds of feature updates",
      },
      {
        icon: "mdi-fire",
        text: "Payouts to your bank account",
      },
      {
        icon: "mdi-chart-line",
        text: "Financial reconciliation and reporting",
      },
    ],
    btn: "Subscribe",
  },
]);
const activeItems = ref<PricingCard[]>(dataMonthly.value);
</script>
