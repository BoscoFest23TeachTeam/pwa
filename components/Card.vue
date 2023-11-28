<template>
  <div class="overflow-hidden rounded-2xl has-shadow w-[30rem] relative">
    <div>
      <img
        :src="picurl"
        class="aspect-video"
        alt=""
      />
    </div>
    <div class="absolute inset-0 z-10 bg-gradient-to-t from-black" />
    <div class="absolute inset-x-0 bottom-0 z-20 p-4 text-white">
      <div class="text-xs">{{author}} • {{on}}</div>
      <h3 class="text-xl font-semibold">{{head}}</h3>
      <div class="text-sm opacity-80">
        <p>
          {{maintext}}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps<{author: string, on: string, maintext: string, picurl: string, head: string}>()
</script>
