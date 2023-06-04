<template>
    <section class="w-full h-[900px] overflow-visible">
        <div class="w-full h-full parallelogram lg:px-10 lg:py-8 overflow-visible">
            <nav>
                <div class="max-w-full flex flex-wrap items-center justify-between">
                    <a href="#">
                        <img class="lg:w-44" :src="logo" alt="Advokat Plus logo">
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-white rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent dark:text-white md:dark:text-white-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white-100 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white-700 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white-700 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-100 rounded hover:bg-white md:hover:bg-transparent md:border-0 md:hover:text-white-700 dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                            <li>
                                <button @click="$router.push({ name: 'admin.login' })" type="button" class="w-48 h-12 text-md text-white bg-[#9B6765] hover:bg-[#DA8F5E] focus:outline-none focus:ring-4 focus:ring-[#DA8F5E] font-medium rounded-xl text-sm px-10 py-2.5 text-center dark:focus:ring-yellow-900">Uloguj se</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="mt-64 flex flex-col w-[40%]">
                <div class="mb-8">
                    <h1 class="text-5xl font-bold mb-8"><span class="text-[#DB9465]">Upravo ste dobili više</span>
                        prostora za odbranu</h1>
                    <p class="text-md text-gray-500">Ako vam je dosta da uvek sa sobom nosite rokovnik preselite ga u vaš telefon ili tablet. Telefon je svakako uvek sa vama, a mi vam nudimo rešenje koje će vam pomoći da vaš advokatski posao obavljate još lakše i brže </p>
                </div>
                <button type="button" class="w-48 h-12 text-md text-white bg-gray-600 hover:bg-[#DA8F5E] focus:outline-none focus:ring-4 focus:ring-[#DA8F5E] font-medium rounded-2xl text-sm px-10 py-2.5 text-center dark:focus:ring-yellow-900">Probaj Odmah</button>
            </div>
        </div>
    </section>
    <section class="w-full p-10 mt-10">
        <div class="w-full inline-flex flex-col space-y-6 items-center justify-start">
            <p class="text-5xl text-gray-600">Kako da budete produktivniji?</p>
            <p class="text-md leading-7 text-center text-gray-600 text-opacity-60" style="width: 964px;">Naša aplikacija će vam pomoći da budete uvek u toku sa svim vašim klijentima. Pratite svoju statistiku kako na godišnjem tako i na dnevnom nivou.</p>
        </div>
        <div class="w-full flex items-center">
            <img class="w-full" :src="appIllustration" alt="Application screen illustration">
        </div>
    </section>
</template>

<script>
    import {onMounted} from 'vue'
    import usePosts from '../api/usePosts'
    import {useStore} from 'vuex'
    import logo from '../assets/logo.svg'
    import mainIllustration from '../assets/main-illustration.svg'
    import appIllustration from '../assets/app-illustration.svg'

    export default {
        setup() {
            const {posts, fetchPosts} = usePosts()
            const store = useStore()

            onMounted(fetchPosts)

            return {
                posts,
                logo,
                mainIllustration,
                appIllustration
            }
        }
    }
</script>

<style scoped>
    .parallelogram {
        width: 100%;
        background-image: url(../assets/main-illustration.svg);
        background-size: 1440px 1047px;
        background-repeat: no-repeat;
        background-position: 250px -80px;
        margin-left: auto;
        margin-right: auto;
        transition: background-size 30ms ease-in;
        -moz-transition: background-size 30ms ease-in;
        -web-kit-transition: background-size 30ms ease-in;
        overflow: visible;
    }

    @media only screen and (min-width: 1440px) {
        .parallelogram {
            width: 100%;
            background-image: url(../assets/main-illustration.svg);
            background-size: 1440px 1047px;
            background-repeat: no-repeat;
            background-position: 250px -80px;
            margin-left: auto;
            margin-right: auto;
            transition: background-size 30ms ease-in;
            -moz-transition: background-size 30ms ease-in;
            -web-kit-transition: background-size 30ms ease-in;
            overflow: visible;
        }
    }

    @media (min-width: 1820px) {
        .parallelogram {
            width: 100%;
            background-image: url(../assets/main-illustration.svg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 250px -80px;
            margin-left: auto;
            margin-right: auto;
            transition: background-size 30ms ease-in;
            -moz-transition: background-size 30ms ease-in;
            -web-kit-transition: background-size 30ms ease-in;
            overflow: visible;
        }
    }

    @media (max-width: 720px) {
        .parallelogram {
            width: 100%;
            background-image: none;
            background-size: 1350px 977px;
            background-repeat: no-repeat;
            background-position: top;
            margin-left: auto;
            margin-right: auto;
            overflow: visible;
        }
    }
</style>
