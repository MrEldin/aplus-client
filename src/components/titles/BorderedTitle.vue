<template>
    <div class="inline-flex flex-col space-y-2 items-start justify-center w-full px-5">
        <div class="inline-flex space-x-2 items-center justify-start">
            <slot></slot>
            <p class="text-lg font-medium text-white">Kratka statistika</p>
        </div>
        <p class="w-full text-xs text-white text-opacity-50">Ovo je opcija koja se koristi za prikaz osnovnih statističkih podataka o nekoj skupini podataka, kao što su prosječna vrijednost, standardna devijacija, minimum i maksimum.</p>
    </div>
</template>

<script setup>
    defineProps({
    })
</script>

<style scoped>
</style>
