<template>
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1" :for="id" v-html="label"></label>
    <div class="flex">
        <input
            class="block w-full flex-1 bg-gray-100 px-4 py-2 rounded border border-gray-200 text-sm sm:text-base"
            :id="id"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            :value="modelValue"
        >
        <span v-if="suffix" v-html="suffix" class="inline-flex items-center rounded-r border border-l-0 border-gray-200 bg-gray-100 px-4 py-2 text-sm sm:text-base text-gray-500"></span>
    </div>
    <p class="text-xs text-red-500 pl-2 pt-2" v-if="error.length > 0">{{  error[0].$message }}</p>
  </div>
</template>
  
  <script setup>
  import {v4 as uuidv4} from 'uuid';
  
  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: [Array],
      default: ''
    },
  })
  
  const id = uuidv4()
  </script>
  
  <style scoped lang="scss">
  
  </style>