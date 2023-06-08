<template>
    <section class="w-full h-full bg-white flex-col space-y-6 p-6 items-center shadow justify-center rounded-2xl">
        <div class="w-full h-1/4 p-6 pb-3">
            <div class="w-full h-full inline-flex flex-col space-y-2.5 items-start justify-center">
                <p class="text-sm font-light leading-3 text-gray-600">Kolicina uploadovanih dokumenata po danu</p>
                <p class="text-xl font-semibold leading-snug text-gray-600">245</p>
            </div>
        </div>
        <div class="w-full h-3/4 p-6 pt-3">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import LineChart from './charts/LineChart.vue'

    export default {
        components: {
            LineChart
        },
        setup() {
            const store = useStore()

            return {
            }
        }
    }
</script>

<style scoped>
    .main-body {
        width: calc();
    }
</style>
