<script setup>
    import { maska as vMask} from 'maska';
    import { watch, reactive } from 'vue';

    import {v4 as uuidv4} from 'uuid';
  
    const props = defineProps({
        label: {
            type: String,
            default: 'Номер телефона'
        },
        modelValue: {
            type: [String],
            default: ''
        },
        error: {
            type: [Array],
            default: ''
        },
    })
    const emits = defineEmits(['update:modelValue'])

    const id = uuidv4()

    const state = reactive({ phone: '', country_code: '+992' })
    
    watch(state, (newValue, oldValue) => {
        emits('update:modelValue', newValue.country_code + newValue.phone.replace(/\D/g, ''))
    })
</script>
<template>
    <div class="mb-4">
        <label :for="id" class="block text-sm font-medium text-gray-700" v-html="label"></label>
        <div class="mt-1 flex">
            <select class="bg-gray-100 text-gray-500 px-4 py-2 rounded-l border border-r-0 border-gray-200" v-model="state.country_code">
                <option value="+992">+992</option>
                <option value="+93">+93</option>
            </select>
            <input type="text" :id="id" v-model="state.phone" placeholder="918 00 00 00" v-mask="'### ## ## ##'"
                class="block w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-r border border-gray-200"
            >
        </div>
        <p class="text-xs text-red-500 pl-2 pt-2" v-if="error.length > 0">{{  error[0].$message }}</p>
    </div>
</template>
