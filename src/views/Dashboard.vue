<template>
    <div class="w-full h-screen bg-[#FFF6EF] flex">
        <Sidebar />
        <router-view />
    </div>
</template>
<script>
import Sidebar from "../components/app/Sidebar.vue";
import {useStore} from "vuex";

export default {
  components: {
    Sidebar,
  },
  setup() {
    const store = useStore()

    return {
    }
  }
}
</script>
