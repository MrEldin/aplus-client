<template>
    <div>
        <input
                :type="type"
                :value="modelValue"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)"
                class="text-xs text-white font-light placeholder-white border-none focus:ring-gray-300 focus:border-gray-300 w-full bg-[#C99391] rounded-2xl"
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
