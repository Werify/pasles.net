<template>
  <section class="bg-gray-900 dark:bg-gray-800 py-20 relative">
    <Circle :size="500" />
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-md text-center">
        <p
          class="mb-4 mt-4 text-3xl tracking-tight font-bold text-gray-200 md:text-4xl dark:text-white"
        >
          Get your first tips today
        </p>
        <p
          class="mb-4 mt-4 text-lg font-light text-gray-200 dark:text-gray-400"
        >
          It takes 30 seconds to sign up. Download the app and create an account
          today and we’ll send you a tip guaranteed to double your first
          investment.
        </p>
        <a
          href="#"
          class="w-full py-1 sm:w-auto mt-6 bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-2 dark:bg-gray-200 dark:hover:bg-gray-300 dark:focus:ring-gray-800"
        >
          <svg
            class="mr-3 w-7 h-7"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google-play"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
            ></path>
          </svg>
          <div class="text-left">
            <div class="mb-1 text-xs">Get in on</div>
            <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
