<template>
  <div id="page_blocker" class="hidden md:flex">
    {{ content }}
  </div>
</template>

<script setup>
  defineProps({
    content: {
      type: String,
    },
  });
</script>

<style scoped>
  #page_blocker {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: var(--dark);
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    font-size: 2.5rem;
    z-index: 9999999999999999;
  }
</style>
