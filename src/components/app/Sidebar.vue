<template>
    <section class="w-16 sidebar h-screen bg-[#3E546C] flex items-center justify-center">
        <Navigation />
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import Navigation from './Navigation.vue'

    export default {
        components: {
            Navigation
        },
        setup() {
            const store = useStore()

            return {
            }
        }
    }
</script>

<style scoped>
  .sidebar {
    min-width: 64px;
  }
</style>
