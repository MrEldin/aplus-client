<template>
    <ul class="w-full flex-col items-center justify-center">
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.dashboard" ><img :src="scan" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.calendar"><img :src="calendar" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.category"><img :src="category" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.wallet"><img :src="wallet" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.activity"><img :src="activity" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.discount"><img :src="discount" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.user"><img :src="user" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.chat"><img :src="chat" alt="Scan"/></BellIcon></li>
      <li class="w-full h-[40px]"><BellIcon route-prop="admin.work"><img :src="work" alt="Scan"/></BellIcon></li>
    </ul>
</template>

<script>
import {ref} from 'vue'
import scan from '../../assets/Iconly/Light-outline/Scan.svg'
import calendar from '../../assets/Iconly/Broken/Calendar.svg'
import category from '../../assets/Iconly/Broken/Category.svg'
import wallet from '../../assets/Iconly/Broken/Wallet.svg'
import activity from '../../assets/Iconly/Broken/Activity.svg'
import discount from '../../assets/Iconly/Broken/Discount.svg'
import user from '../../assets/Iconly/Broken/3 User.svg'
import chat from '../../assets/Iconly/Broken/Chat.svg'
import work from '../../assets/Iconly/Broken/Work.svg'
import BellIcon from '../common/BellIcon.vue'
import { useRoute } from 'vue-router';

export default {
  components: {
    BellIcon
  },
    setup() {
      const showBell = ref(true);
      setTimeout(() => {
        showBell.value = false;
      }, 2800);
      const route = useRoute();

      console.log(`current route name on component setup init: ${route.name}`);

      const handleMouseEnter = () => {
        showBell.value = true;
        setTimeout(() => {
          showBell.value = false;
        }, 2800);
      };

      return {
        showBell,
        scan,
        handleMouseEnter,
        calendar,
        category,
        wallet,
        activity,
        discount,
        user,
        chat,
        work,
        route,
      }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@keyframes scale-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes ring-bell {
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(10deg);
  }
  20%, 40%, 60%, 80% {
    transform: rotate(-10deg);
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#bell-icon {
  transform-origin: 50% 0;
  animation: scale-in 0.6s ease-in-out forwards, ring-bell 1.8s ease-in-out 0.6s forwards, fade-out 1.8s ease-in-out 1.4s forwards;
}
</style>
