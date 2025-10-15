<template>
  <div id="exp-card" class="">
    <div
      class="flex flex-col items-center absolute z-10 left-2 top-4 self-center h-full"
    >
      <span class="circle"></span>
      <span class="trail"></span>
    </div>
    <div class="relative z-20 content text-white"  data-aos="slide-up">
      <span class="text-lg font-semibold text-primary uppercase"
        >{{ title }} </span
      ><br />
      <span class="text-gray-300 italic"> {{ org }}</span>
      <span class="text-gray-300 mx-2"><i class="fa-light fa-dash"></i></span>
      <span class="date">{{ date }}</span>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
    },
    org: {
      type: String,
    },
    date: {
      type: String,
    },
  });
</script>

<style scoped>
  #exp-card {
    height: 100% !important;
    width: 100%;
    padding: 10px;
    position: relative;
  }

  .content {
    margin-left: 1.5rem;
  }

  .circle {
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background: var(--primary);
  }
  .trail {
    width: 1px;
    height: 100%;
    background: #fff;
  }

  .date {
    color: rgb(209 213 219);
  }
</style>
