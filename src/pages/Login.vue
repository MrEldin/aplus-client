<template>
    <section class="w-[1126px] h-[720px] flex items-center justify-center">
        <section
                class="w-[510px] h-[650px] bg-white rounded-tl-2xl rounded-bl-2xl flex items-center justify-center border">
            <div class="w-72 h-auto">
                <div class="mb-5">
                    <h2 class="text-2xl font-bold text-gray-500">Uloguj se</h2>
                    <p class="text-xs italic font-lightitalic text-gray-500 text-opacity-70 mt-2">Povećajte svoje šanse
                        za uspjeh u sudskom postupku sa našom aplikacijom.</p>
                </div>
                <form v-on:submit.prevent="attemptLogin">
                    <Input
                            :form="form.email"
                            placeholder="you@mail.com"
                            :error="errors.email ? errors.email[0] : false"
                            v-model="form.email"
                    />
                    <Input
                            type="password"
                            :form="form.password"
                            placeholder="********"
                            :error="errors.password ? errors.password[0] : false"
                            v-model="form.password"
                            class="mt-2"
                    />
                    <div class="mt-2">
                        <button type="submit"
                                class="w-full h-9 mt-2 text-md text-white bg-[#9B6765] hover:bg-[#DA8F5E] focus:outline-none focus:ring-4 focus:ring-[#DA8F5E] font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:focus:ring-yellow-900">
                            Uloguj se
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <section class="bg-gray-600 shadow rounded-2xl w-[610px] h-full auth-image">
            <div class="inline-flex flex-col space-y-12 items-center justify-end w-80 h-72 ml-16">
                <div class="flex w-full">
                    <img :src="logo" alt="Advokat Plus logo">
                </div>
                <div class="flex flex-col space-y-6 items-start justify-start">
                    <div class="flex flex-col space-y-2.5 items-start justify-start">
                        <p class="w-64 text-sm leading-none text-white">Pronađite stručnjaka i pratite vaš slučaj putem
                            naše aplikacije</p>
                        <p class="w-full text-xs italic font-lightitalic leading-none text-gray-300 text-opacity-70">
                            “Advokat Plus za advokate pruža brzu i laku dostupnost najboljih advokata u vašoj oblasti.
                            Sve to sa sigurnom i zaštićenom platformom. Povećajte svoje šanse za uspjeh u sudskom
                            postupku sa našom aplikacijom.”</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import logo from '../assets/logo-white.svg'
    import {useStore} from 'vuex'
    import {reactive, ref} from 'vue'
    import appIllustration from '../assets/app-illustration.svg'
    import router from '../router'
    import Input from '../components/inputs/Input.vue'

    export default {
        components: {
            Input
        },
        setup() {
            const store = useStore()

            const form = reactive({
                email: '',
                password: ''
            })

            const errors = ref({})

            const attemptLogin = () => {
                store.dispatch('login', form)
                    .then((response) => {
                        console.log('echo')
                        router.push({path: '/dashboard'})
                    })
                    .catch((e) => {
                        if (e.response.status === 422) {
                            errors.value = e.response.data.errors
                        }
                    })
            }

            return {
                attemptLogin,
                form,
                logo,
                appIllustration,
                errors
            }
        }
    }
</script>

<style scoped>
    .auth-image {
        width: 612px;
        background-image: url(../assets/auth-illustration.svg);
        background-size: 576px 678px;
        background-repeat: no-repeat;
        background-position: right bottom;
        margin-left: auto;
        margin-right: auto;
        transition: background-size 30ms ease-in;
        -moz-transition: background-size 30ms ease-in;
        -web-kit-transition: background-size 30ms ease-in;
        overflow: visible;
    }
</style>
