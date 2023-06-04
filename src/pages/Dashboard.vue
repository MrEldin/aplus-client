<template>
    <div class="w-full flex">
        <Sidebar />
        <Mainbar />
        <AppBody />
    </div>
</template>

<script>
    import {useStore} from 'vuex'
    import Sidebar from '../components/app/Sidebar.vue'
    import Mainbar from '../components/app/Mainbar.vue'
    import AppBody from '../components/app/AppBody.vue'

    export default {
        components: {
            Sidebar,
            Mainbar,
            AppBody
        },
        setup() {
            const store = useStore()

            return {
            }
        }
    }
</script>

<style scoped>
</style>
