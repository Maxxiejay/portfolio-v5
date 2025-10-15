<template>
  <div
    class="services_card p-4 pt-8 pl-8 relative text-white max-w-xs mx-auto flex flex-col justify-start"
    data-aos="fade-up"
  >
    <div
      class="flex flex-col items-center py-4 absolute left-2 top-0 self-center h-full"
    >
      <span class="dot"></span>
      <span class="line"></span>
    </div>

    <div class="flex flex-col space-y-6">
      <i class="text-4xl" :class="icon"></i>
      <span class="text-2xl font-semibold">{{ title }}</span>
      <span>{{ description }}</span>
    </div>

    <!-- <div class="flex items-center absolute bottom-2 w-full">
      <span class="dot mr-2"></span>
      <span class="line"></span>
    </div> -->
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    icon: {
      type: String,
    },
  });
</script>

<style scoped>
  .services_card {
    width: 320px;
    height: 360px !important;
    height: fit-content;
    background: rgba(143, 92, 255, 0.1);
    display: flex;
    margin: 0 auto;
  }

  /* .test {
    width: 100%;
    height: 2px;
    background: var(--primary);
  } */

  .dot {
    height: 10px;
    width: 10px;
    border-radius: 100%;
    background: var(--primary);
  }
  .line {
    width: 2px;
    height: 100%;
    background: var(--primary);
  }

  .line,
  .dot {
    box-shadow: 0 0 2px 2px rgba(143, 92, 255, 0.4);
  }
</style>
