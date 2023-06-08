<script>
import {useStore} from 'vuex'

export default {
  components: {
  },
  props: {
    color: {
      type: String,
      required: false,
      default: 'B17C7A'
    }
  },
  setup() {
    const store = useStore()

    return {
      store
    }
  }
}
</script>

<template>
  <div class="w-1/4 rounded-2xl flex flex-col justify-center items-center" :class="'bg-[#'+color+']'">
    <div class="flex flex-col justify-start items-start space-y-9 px-9">
      <div class="flex flex-col justify-start items-start space-y-2 2xl:space-y-6">
        <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-grow-0 flex-shrink-0 w-[60px] h-[60px] relative"
            preserveAspectRatio="xMidYMid meet"
        >
          <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48.504 17.9631C51.1333 17.9631 53.5033 16.3815 54.5074 13.9569C55.5115 11.5322 54.9517 8.7427 53.0894 6.89076C51.227 5.03882 48.4294 4.48975 46.0028 5.49991C43.5763 6.51007 41.9993 8.8802 42.0082 11.5037C42.0204 15.0747 44.9251 17.9631 48.504 17.9631ZM48.5041 8.70388C50.0538 8.70388 51.3101 9.9574 51.3101 11.5037C51.3101 13.05 50.0538 14.3035 48.5041 14.3035C46.9543 14.3035 45.698 13.05 45.698 11.5037C45.698 9.9574 46.9543 8.70388 48.5041 8.70388ZM8.68978 39.9868C8.68978 47.306 12.7331 51.3184 20.0464 51.3184C21.0664 51.3303 21.8904 52.1524 21.9023 53.1702C21.8902 54.1843 21.0628 55.0001 20.0464 55C10.7667 55 5 49.246 5 39.9868V21.9754C5 12.6942 10.7667 6.94022 20.0464 6.94022H36.3079C37.3243 6.95229 38.1418 7.77786 38.1417 8.79206C38.1418 9.2812 37.9455 9.74999 37.5968 10.0938C37.2481 10.4376 36.776 10.6278 36.2858 10.6219H20.0464C12.7331 10.6219 8.68978 14.6562 8.68978 21.9754V39.9868ZM34.6729 35.1809C34.3634 35.5621 33.9219 35.8138 33.4356 35.8863C32.9516 35.9354 32.4676 35.7929 32.0879 35.4895L25.3048 30.1765L19.2068 38.0909C18.916 38.4856 18.4787 38.7475 17.9928 38.818C17.5069 38.8884 17.0131 38.7615 16.6217 38.4657C15.823 37.8409 15.6754 36.6919 16.2903 35.8863L23.5152 26.4948C23.8166 26.1054 24.2609 25.8517 24.75 25.7897C25.2391 25.7277 25.7329 25.8624 26.1223 26.1641L32.9054 31.4772L38.8709 23.8714C39.5257 23.2501 40.5364 23.1974 41.2526 23.7471C41.9688 24.2968 42.177 25.2851 41.7432 26.0759L34.6729 35.1809ZM51.3984 21.9754C50.3856 21.9754 49.5646 22.7947 49.5646 23.8052V39.9868C49.4983 47.306 45.455 51.3184 38.1417 51.3184H30.7622C29.7422 51.3303 28.9182 52.1524 28.9062 53.1702C28.9183 54.1843 29.7457 55.0001 30.7622 55H38.1417C47.4214 55 53.2102 49.2461 53.2102 39.9868V23.8052C53.2103 22.8032 52.4026 21.9875 51.3984 21.9754Z"
              fill="#F9C6A0"
          ></path>
        </svg>
        <div class="flex flex-col justify-start items-start">
          <p class="flex-grow-0 text-md 2xl:text-xl font-medium text-white">Broj sati sa sudijom</p>
          <p class="flex-grow-0 text-xs 2xl:text-md font-light text-white/[0.63]">Koliko sati jos mozes koristiti virtuelnog sudiju:</p>
        </div>
      </div>
      <p class="flex-grow-0 flex-shrink-0 text-3xl 2xl:text-5xl font-medium text-left text-white">28h</p>
    </div>
  </div>
</template>

<style scoped>

</style>
