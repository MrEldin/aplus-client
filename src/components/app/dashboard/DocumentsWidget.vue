<template>
    <section class="w-3/5 h-[500px] bg-white flex-col items-center shadow justify-center rounded-2xl">
        <div class="w-full h-1/4 px-12">
            <div class="w-full h-full inline-flex flex-col space-y-2.5 items-start justify-center">
                <p class="text-xl font-light leading-3 text-gray-600">Kolicina uploadovanih dokumenata po danu</p>
                <p class="text-2xl font-semibold leading-snug text-gray-600">245</p>
            </div>
        </div>
        <div class="w-full h-3/4 px-12 pb-12">
            <LineChart />
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
