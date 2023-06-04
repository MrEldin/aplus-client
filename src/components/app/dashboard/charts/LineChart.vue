<template>
    <section class="w-full h-full flex items-center justify-center">
        <Line :data="data" :options="options" />
    </section>
</template>

<script lang="ts">
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    } from 'chart.js'
    import { Line } from 'vue-chartjs'
    import * as chartConfig from '../../../../../src/chartConfig.js'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    export default {
        name: 'App',
        components: {
            Line
        },
        data() {
            return chartConfig
        }
    }
</script>

<style scoped>
</style>
