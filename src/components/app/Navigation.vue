<template>
    <ul class="w-full flex-col items-center justify-center">
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="scan" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="calendar" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="category" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="wallet" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="activity" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="discount" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="user" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="chat" alt="Dashboard"></a></li>
        <li class="w-full h-[40px]"><a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]" href="" ><img :src="work" alt="Dashboard"></a></li>
    </ul>
</template>

<script>
    import {useStore} from 'vuex'
    import scan from '../../assets/Iconly/Light-outline/Scan.svg'
    import calendar from '../../assets/Iconly/Broken/Calendar.svg'
    import category from '../../assets/Iconly/Broken/Category.svg'
    import wallet from '../../assets/Iconly/Broken/Wallet.svg'
    import activity from '../../assets/Iconly/Broken/Activity.svg'
    import discount from '../../assets/Iconly/Broken/Discount.svg'
    import user from '../../assets/Iconly/Broken/3 User.svg'
    import chat from '../../assets/Iconly/Broken/Chat.svg'
    import work from '../../assets/Iconly/Broken/Work.svg'

    export default {
        setup() {
            const store = useStore()

            return {
                scan,
                calendar,
                category,
                wallet,
                activity,
                discount,
                user,
                chat,
                work,
            }
        }
    }
</script>

<style scoped>
</style>
