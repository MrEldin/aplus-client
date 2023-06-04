<template>
    <section class="w-[332px] h-screen bg-[#9B6765] flex-col items-start py-5 justify-center">
        <BarRedInput
                placeholder="Search"
                :error="errors.search ? errors.search[0] : false"
                v-model="form.search"
                class="w-full px-5"
        />
        <BorderedTitle class="mt-5 py-5 border-t-2 border-b-2 border-yellow-600 border-opacity-20">
            <img :src="scan" alt="Dashboard">
        </BorderedTitle>

        <div class="w-full flex items-center justify-center mt-5 mb-5">
            <div class="inline-flex flex-col items-start justify-start px-2.5 py-6 bg-[#B17C7A] border rounded-2xl border-red-100 border-opacity-20">
                <div class="flex flex-col space-y-8 items-center justify-start">
                    <div class="flex flex-col space-y-1 items-start justify-center w-5/6">
                        <p class="w-52 text-lg font-medium text-white">Zaklina Markovic</p>
                        <p class="w-48 text-xs font-medium text-white text-opacity-50">Advokat Višeg Suda u Beogradu</p>
                    </div>
                    <div class="flex flex-col items-start justify-start px-9 py-3 bg-[#996563] border border-red-100 border-opacity-30 rounded-2xl">
                        <div class="inline-flex space-x-8 items-center justify-center">
                            <div class="inline-flex flex-col space-y-1 items-center justify-start">
                                <p class="text-xs font-medium text-white text-opacity-50">Rokovnici</p>
                                <p class="text-lg font-medium text-white">20</p>
                            </div>
                            <div class="inline-flex flex-col space-y-1 items-center justify-start">
                                <p class="text-xs font-medium text-white text-opacity-50">Predmeti</p>
                                <p class="text-lg font-medium text-white">14</p>
                            </div>
                            <div class="inline-flex flex-col space-y-1 items-center justify-start">
                                <p class="text-xs font-medium text-white text-opacity-50">Tarifa</p>
                                <p class="text-lg font-medium text-white">80</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import Navigation from './Navigation.vue'
    import BarRedInput from '../../components/inputs/BarRedInput.vue'
    import BorderedTitle from '../../components/titles/BorderedTitle.vue'
    import {reactive, ref} from 'vue'
    import scan from '../../assets/Iconly/Light-outline/Scan.svg'

    export default {
        components: {
            Navigation,
            BarRedInput,
            BorderedTitle,
        },
        setup() {
            const store = useStore()

            const form = reactive({
                search: '',
            })

            const errors = ref({
                search: null
            })


            return {
                form,
                errors,
                scan
            }
        }
    }
</script>

<style scoped>
</style>
