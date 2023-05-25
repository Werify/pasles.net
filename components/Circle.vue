<script setup lang="ts">

interface IProps {
  size: number;
  color: string;
  reverse: boolean;
}
defineProps({
  size: {
    type: Number,
    default: 600,
  },
  color: {
    type: String,
    default: "#13B5C8",
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <svg
      viewBox="0 0 558 558"
      :width="size"
      :height="size"
      fill="none"
      aria-hidden="true"
      :class="reverse ? 'animate-spin-reverse-slower' : 'animate-spin-slower'"
    >
      <defs>
        <linearGradient
          id=":R3b9m:"
          x1="79"
          y1="16"
          x2="105"
          y2="237"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#13B5C8"></stop>
          <stop offset="1" stop-color="#13B5C8" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
      <path
        opacity=".2"
        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
        stroke="#13B5C8"
      ></path>
      <path
        d="M1 279C1 125.465 125.465 1 279 1"
        stroke="url(#:R3b9m:)"
        stroke-linecap="round"
      ></path>
    </svg>
  </div>
</template>

<style>
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes spin-reverse {
  to {
    transform: rotate(-1turn);
  }
}
.animate-spin-slower {
  animation: spin 6s linear infinite;
}
.animate-spin-reverse-slower {
  animation: spin-reverse 6s linear infinite;
}
</style>
