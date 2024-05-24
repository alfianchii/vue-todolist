<script setup></script>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
      default: "blue",
    },
  },
  data() {
    return {
      colors: {
        red: "bg-red-500 hover:bg-red-700 focus:ring-red-200",
        blue: "bg-blue-500 hover:bg-blue-700 focus:ring-blue-200",
        green: "bg-green-500 hover:bg-green-700 focus:ring-green-200",
        yellow: "bg-yellow-500 hover:bg-yellow-700 focus:ring-yellow-200",
      },
    };
  },
  computed: {
    colorClass() {
      for (const color in this.colors)
        if (color === this.color) return this.colors[color];
    },
  },
};
</script>

<template>
  <button
    :class="[
      'px-5 py-2 text-white transition-all duration-300 focus:ring',
      colorClass,
    ]"
  >
    {{ text }}
  </button>
</template>
