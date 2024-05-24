<script setup></script>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
    },
  },
};
</script>

<template>
  <input
    class="h-10 w-96 rounded-s-md border border-gray-200 p-3 text-gray-700 placeholder-gray-300 outline-none transition-all duration-300 focus:border-blue-500"
    :value="modelValue"
    :autofocus="autofocus"
    :type="type"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
