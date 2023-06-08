<template>
    <section class="w-[300px] min-w-[300px] 2xl:min-w-[330px] max-h-screen bg-[#9B6765] flex-col items-start justify-center">
        <BarRedInput
                placeholder="Search"
                :error="errors.search ? errors.search[0] : false"
                v-model="form.search"
                class="w-full px-6 h-16 flex items-center justify-center"
        />
        <BorderedTitle class="h-32 border-t-2 border-b-2 border-yellow-600 border-opacity-20">
            <img :src="scan" class="w-[20px] h-[20px]" alt="Dashboard">
        </BorderedTitle>
      <perfect-scrollbar>
        <RightBounceContainer :visible="show">
          <section class="w-full p-6">
            <div class="inline-flex flex-col items-start justify-start bg-[#B17C7A] border rounded-2xl border-red-100 border-opacity-20 big-lines w-full">
              <div class="w-full flex flex-col p-2 2xl:p-3 space-y-3 2xl:space-y-4 items-start justify-start">
                <div class="flex flex-col p-2 space-y-1 items-start justify-center">
                  <p class="text-md 2xl:text-lg font-medium text-white">{{ store.getters.name }}</p>
                  <p class="text-[11px] 2xl:text-xs font-small text-white text-opacity-50">Advokat Višeg Suda u Beogradu</p>
                </div>
                <div class="w-full px-6 py-2 flex items-start justify-between bg-[#996563] border border-red-100 border-opacity-30 rounded-2xl">
                    <div class="inline-flex flex-col items-center justify-start">
                      <p class="text-[11px] 2xl:text-xs font-medium text-white text-opacity-50">Rokovnici</p>
                      <p class="text-md 2xl:text-lg font-medium text-white">20</p>
                    </div>
                    <div class="inline-flex flex-col items-center justify-start">
                      <p class="text-[11px] 2xl:text-xs font-medium text-white text-opacity-50">Predmeti</p>
                      <p class="text-md 2xl:text-lg font-medium text-white">14</p>
                    </div>
                    <div class="inline-flex flex-col items-center justify-start">
                      <p class="text-[11px] 2xl:text-xs font-medium text-white text-opacity-50">Tarifa</p>
                      <p class="text-md 2xl:text-lg font-medium text-white">80</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </RightBounceContainer>
        <div class="px-6">
          <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-white">Licna statistika</p>
          <SmallInfoCard />
          <SmallInfoCard />
        </div>
        <div class="px-6">
          <AddInfoCard />
        </div>
      </perfect-scrollbar>
    </section>
</template>

<script>
    import {useStore} from 'vuex'
    import Navigation from './Navigation.vue'
    import BarRedInput from '../../components/inputs/BarRedInput.vue'
    import BorderedTitle from '../../components/titles/BorderedTitle.vue'
    import RightBounceContainer from '../../components/common/RightBounceContainer.vue'
    import {reactive, ref} from 'vue'
    import scan from '../../assets/Iconly/Light-outline/Scan.svg'
    import {onMounted} from 'vue'
    import SmallInfoCard from "./dashboard/cards/SmallInfoCard.vue";
    import AddInfoCard from "./dashboard/cards/AddInfoCard.vue";
    import Header from "./Header.vue";

    export default {
        components: {
          Header,
          AddInfoCard,
          SmallInfoCard,
            Navigation,
            BarRedInput,
            BorderedTitle,
            RightBounceContainer,
        },
        setup() {
            const store = useStore()

            const form = reactive({
                search: '',
            })

            const errors = ref({
                search: null
            })

          const show = ref(false)
          onMounted(() => {
            show.value = true
          })


            return {
                form,
                errors,
                scan,
              show,
              store
            }
        }
    }
</script>

<style scoped>
.ps {
  height: calc(100% - 192px);
}

.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-out 0.8s;
}
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  60% {
    opacity: 1;
    transform: translateX(-10%);
  }
  80% {
    transform: translateX(5%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-out {
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
    opacity: 0;
    transform: translateX(100%);
  }
}


.big-lines {
  background-image: url(../../assets/big-lines.svg);
  background-size: 180%;
  background-repeat: no-repeat;
  background-position: -90px -103px;
  transition: background-size 30ms ease-in;
  -moz-transition: background-size 30ms ease-in;
  -web-kit-transition: background-size 30ms ease-in;
  overflow: visible;
}
</style>
