<template>
    <section class="w-full h-36 flex items-center justify-center">
        <div class="inline-flex items-center justify-between w-full h-full px-24">
            <div class="inline-flex flex-col items-start justify-center h-full">
                <p class="text-3xl font-bold leading-relaxed text-gray-600">Zdravo Zaklina,</p>
                <p class="text-md italic font-lightitalic text-gray-600 text-opacity-75">Hajde da proverimo tvoj status danas!</p>
            </div>
            <div class="h-full flex space-x-14 items-center justify-center">
                <div class="h-full flex items-center justify-center space-x-6">
                    <div class="inline-flex flex-col items-end justify-start">
                        <img class="pr-2" :src="notification" alt="Dashboard">
                        <div class="absolute w-2 h-2 bg-yellow-300 rounded-full"></div>
                    </div>
                    <div class="flex items-center justify-start">
                        <p class="text-xs font-light text-gray-600">SR </p>
                    </div>
                </div>
                <div class="flex space-x-4 items-center justify-center">
                    <div class="inline-flex flex-col items-end justify-start">
                        <p class="text-sm font-medium text-gray-600">Zaklina Markovic</p>
                        <p class="text-xs font-light text-gray-600 text-opacity-30">Advokat</p>
                    </div>
                    <img class="w-11 h-11 border rounded-full border-gray-600 border-opacity-30" src="https://via.placeholder.com/42x42"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import notification from '../../assets/Iconly/Broken/Notification.svg'

    export default {
        setup() {
            const store = useStore()

            return {
                notification
            }
        }
    }
</script>

<style scoped>
    .main-body {
        width: calc();
    }
</style>
