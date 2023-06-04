<template>
    <div>
        <input
                :type="type"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                class="shadow-sm focus:ring-gray-400 focus:border-gray-400 block w-full sm:text-sm  bg-[#FFF6EF] border-gray-300 rounded-lg"
        >
        <p class="mt-2 text-sm text-red-600" v-if="error">{{error}}</p>
    </div>
</template>

<script setup>
    defineProps({
        placeholder: {
            type: String,
            required: true
        },
        error: {
            type: [String, Boolean],
            required: false,
            default: false
        },
        modelValue: {
            type: String,
            required: false,
            default: ''
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        }
    })
</script>

<style scoped>
</style>
