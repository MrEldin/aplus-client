<script>
import folder from '../../../../assets/Iconly/Broken/Folder.svg';

export default {
  setup() {
    return {
      folder,
    }
  }
}
</script>

<template>
  <section class="w-full my-3">
    <div class="inline-flex flex-col items-start justify-start bg-[#B17C7A] border rounded-xl border-red-100 border-opacity-20 big-lines w-full py-2 pl-2">
      <div class="flex justify-start items-center h-[41px] gap-5">
        <div class="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 h-[37px] w-[37px] relative py-[12.949999809265137px] rounded-[8.09px] bg-[#f0cf93] border-[0.32px] border-[#dca7a5]">
          <img :src="folder" alt="Folder"/>
        </div>
        <div class="flex flex-col justify-center items-start">
          <p class="text-xs font-light text-left text-white/[0.72]">Ukupno Dokumenata</p>
          <p class="text-xs font-medium text-left text-white">356</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
