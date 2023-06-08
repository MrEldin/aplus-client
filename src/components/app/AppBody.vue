<template>
    <section class="main-body h-screen bg-[#FFF6EF]">
        <Header />
        <div class="w-full h-[400px] 2xl:h-[500px] flex px-12 pb-6 space-x-6">
          <DocumentsWidget class="w-9/12 2xl:w-7/12">
            <LineChart />
          </DocumentsWidget>
          <CountDashboardCard />
          <CountDashboardCard class="hidden 2xl:flex"/>
        </div>
        <div class="w-full h-2/5 flex px-12 pb-6 space-x-6">
          <DocumentsWidget class="w-full h-full">
            <BarChart />
          </DocumentsWidget>
        </div>
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import Header from './Header.vue'
    import DocumentsWidget from './dashboard/DocumentsWidget.vue'
    import CountDashboardCard from "./dashboard/cards/CountDashboardCard.vue";
    import LineChart from "./dashboard/charts/LineChart.vue";
    import BarChart from "./dashboard/charts/BarChart.vue";

    export default {
        components: {
          LineChart,
          BarChart,
          CountDashboardCard,
            Header,
            DocumentsWidget,
        },
        setup() {
            const store = useStore()

            return {
              store
            }
        }
    }
</script>

<style scoped>
    .main-body {
      width: calc(100% - 300px);
    }

    @media (min-width: 1536px) {
      .main-body {
        width: calc(100% - 330px);
      }
    }
</style>
