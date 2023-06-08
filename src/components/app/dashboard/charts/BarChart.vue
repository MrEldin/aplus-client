<template>
    <section class="w-full h-full flex items-center justify-center">
        <Bar :data="data" :options="options" />
    </section>
</template>

<script lang="ts">
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale
    } from 'chart.js'
    import { Bar } from 'vue-chartjs'
    import * as chartConfig from '../../../../../src/barChartConfig.js'

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    export default {
        name: 'App',
        components: {
            Bar
        },
        data() {
            return chartConfig
        }
    }
</script>

<style scoped>
</style>
