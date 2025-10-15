<template>
  <div id="plain-card" class="mx-auto" >
    <div class="title">{{ title }}</div>
    <div class="flex items-center justify-center h-full">
      <img v-if="iconPath" class="icon" :src="iconPath" />
      <i v-if="icon" :class="icon"></i>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconPath: {
      type: String,
    },
  })

  //   console.log(iconPath)
</script>

<style scoped>
  #plain-card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(143, 92, 255, 0.1);
    color: #fff;
    width: 150px;
    height: 150px;
    border: 2px solid var(--primary);
    border-radius: 5px;
  }

  #plain-card i {
    /* height: 100%; */
    font-size: 3.5rem;
    margin: auto 0;
  }

  #plain-card img {
    width: 60px;
  }

</style>
