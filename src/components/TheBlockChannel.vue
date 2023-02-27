<template>
  <div class="flex flex-col p-5 gap-5 bg-gray-700 rounded-md">
    <div class="flex gap-5">
      <div class="flex max-w-[120px]">
        <img class="object-cover w-full"
          :src="require(`@/assets/img/${img_src}`)"
          :alt="img_alt"
        >
      </div>
      <div class="flex flex-col gap-3">
        <h1 class="text-xl font-bold">{{title}}</h1>
        <p>{{description}}</p>
      </div>
    </div>
    <div class="">
      <a :href="link">{{link_title}}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    img_src: {
      type: String,
      required: true
    },
    img_alt: {
      type: String,
      required: true
    },
    link_title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  })
</script>
