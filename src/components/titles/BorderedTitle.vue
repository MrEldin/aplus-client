<template>
    <div class="inline-flex flex-col space-y-2 items-start justify-center w-full px-5">
        <div class="inline-flex space-x-2 items-center justify-start">
            <slot></slot>
            <p class="text-md font-medium text-white">Kratka statistika</p>
        </div>
        <p class="w-full text-xs text-white text-opacity-50">Nekada advokati zele videti osnovne statisticke podatke. Ovde smo obezbedili da svaki advokat moze videti plodove svog rada.</p>
    </div>
</template>

<script setup>
    defineProps({
    })
</script>

<style scoped>
</style>
