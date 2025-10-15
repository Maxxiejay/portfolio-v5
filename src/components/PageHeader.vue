<template>
  <div
    id="page_header"
    class="font-semibold self-start text-white text-2xl my-4 flex items-center justify-between gap-2"
    data-aos="slide-right"
  >
    <span v-if="title" class="w-fit text-nowrap text-2xl">{{ title }}</span>
    <span v-else class="w-fit text-nowrap text-xl">{{ subHeading }}</span>
    <span class="line"></span>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
    },
    subHeading: {
      type: String,
    },
  });
</script>

<style>
  #page_header {
    max-width: 500px;
    width: 100%;
    text-transform: uppercase;
  }

  .line {
    width: 100%;
    height: 2px;
    background: var(--primary);
    /* box-shadow: 0 0 4px 1px var(--primary); */
  }
</style>
