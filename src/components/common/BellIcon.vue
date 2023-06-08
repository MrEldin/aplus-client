<template>
        <a class="w-full h-full flex items-center justify-center hover:bg-[#576D85]"  :class="{'bg-[#576D85]': route.name === routeProp}" href="#" @mouseenter="handleMouseEnter">
            <transition name="fade">
              <div class="w-[24px] h-[24px] flex items-center justify-center">
                <svg v-if="showBell" xmlns="http://www.w3.org/2000/svg" id="bell-icon" class="bell-animation" viewBox="0 0 24 24" fill="none" width="50" height="50">
                  <path fill-rule="evenodd"  clip-rule="evenodd" d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="#F0CF93"/>
                </svg>
                <slot v-if="showIcon"></slot>
              </div>
            </transition>
        </a>
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
import { useRoute } from 'vue-router';

export default {
  props: {
    icon: 'scan',
    routeProp: {
      type: String,
      required: false,
      default: 'admin.dashboard'
    }
  },
    setup(props) {
      const showBell = ref(false);
      const showIcon = ref(true);
      const route = useRoute();

      const handleMouseEnter = () => {
        showIcon.value = false;
        showBell.value = true;
        setTimeout(() => {
          showBell.value = false;
          showIcon.value = true;
        }, 2800);
      };

      const ringBell = () => {
        if(props.routeProp === route.name) {
          handleMouseEnter();
        }
      };

      ringBell()


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
        showIcon,
        route
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
