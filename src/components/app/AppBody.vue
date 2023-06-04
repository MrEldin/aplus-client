<template>
    <section class="main-body h-screen bg-[#FFF6EF]">
        <Header />
        <div class="w-full flex px-20 py-10">
            <DocumentsWidget />
        </div>
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import Header from './Header.vue'
    import DocumentsWidget from './dashboard/DocumentsWidget.vue'
    export default {
        components: {
            Header,
            DocumentsWidget,
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
        width: calc(100% - 396px);
    }
</style>
