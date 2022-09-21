<template>
      <div class="mb-2">
            <label class="block text-sm font-medium text-gray-700 mb-1" :for="id" v-if="label != ''" v-html="label"></label>
            <select 
                class="bg-gray-100 text-gray-500 px-4 py-2 rounded-l border border-r-0 border-gray-200" 
                v-bind="$attrs"
                @input="$emit('update:modelValue', $event.target.value)"
                >
                <option 
                v-for="option in options" 
                :key="option[value]" 
                :value="option[value]"> {{option[name]}}</option>
            </select>
            <p class="text-xs text-red-500 pl-2 pt-2" v-if="error.length > 0">{{  error[0].$message }}</p>
      </div>
  </template>

  <script setup>
    import {v4 as uuidv4} from 'uuid';

    const props = defineProps({
      options: {
        type: [Object, Array],
      },
      value: {
        type: String,
        default: 'id'
      },
      name: {
        type: String,
        default: 'name'
      },
      label: {
        type: String,
        default: ''
      },
      modelValue: {
        type: [String, Number],
        default: ''
      },
      error: {
        type: [String, Array, Object],
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      }
    
    })
    
    const emits = defineEmits(['update:modelValue'])
    
    
    const selected = computed(() => {
      return props.options.find(option => option[props.value] ===  props.modelValue)
    })
    
    function selectOption(val){
    
      emits('update:modelValue', val)
    }

    const id = uuidv4()
    
    </script>
  <style scoped lang="scss">
  
  </style>