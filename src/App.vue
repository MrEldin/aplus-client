<template>
    <component :is="layout || 'div'">
        <router-view />
    </component>
</template>

<script>
    import { provide, shallowRef } from 'vue'
    import layouts from './layouts'
    import router from './router'


    export default {
        setup() {
            const layout = shallowRef('div')

            router.afterEach((to) => {
                layout.value = layouts[to.meta.layout] || 'div'
            })
            provide('app:layout', layout)

            return {
                layout
            }
        }
    }
</script>
