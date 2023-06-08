<template>
  <div class="w-full overflow-hidden bounce-container">
    <Transition name="slide-bounce">
      <div v-if="visible" class="flex justify-center items-center">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
import {Transition} from 'vue'

export default {
  components: {
    Transition,
  },
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped>
@keyframes slide-in-bounce {
  0% {
    transform: translateX(100%);
  }
  60% {
    transform: translateX(-10%);
  }
  80% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes slide-out-bounce {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5%);
  }
  40% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(100%);
  }
}

.slide-bounce-enter-active {
  animation: slide-in-bounce 0.5s;
}

.slide-bounce-leave-active {
  animation: slide-out-bounce 0.8s;
}
</style>
