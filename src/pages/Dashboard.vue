<template>
    <div class="flex app-total">
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
  .app-total {
    width: calc(100% - 64px);
  }
</style>
