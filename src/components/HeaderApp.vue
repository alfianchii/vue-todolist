<script setup></script>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    madeBy: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <header class="flex flex-col items-center justify-center">
    <h1 class="text-4xl">{{ title }}</h1>
    <div
      class="mb-3 mt-6 flex space-x-1.5 font-mono text-sm font-light text-gray-500"
    >
      <span>Made with</span>
      <svg
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        ></path>
      </svg>

      <span>by</span>

      <a
        href="https://github.com/alfianchii"
        rel="noreferrer"
        class="text-blue-500 transition-all duration-300 hover:text-blue-700"
        target="_blank"
        >{{ madeBy }}</a
      >
    </div>
  </header>
</template>
