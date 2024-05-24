<script setup></script>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="absolute end-2 top-2" role="alert">
    <div
      id="dismiss-toast"
      :class="[
        'max-w-xs rounded-xl border border-gray-200 shadow-lg transition duration-300 hs-removing:translate-x-5 hs-removing:opacity-0',
        color,
      ]"
      role="alert"
    >
      <div class="flex p-4">
        <p class="text-sm text-white">{{ msg }}</p>
      </div>
    </div>
  </div>
</template>
