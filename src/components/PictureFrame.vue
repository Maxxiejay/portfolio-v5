<template>
    <div class="frame-container" :style="containerStyle">
      <div class="frame">
        <!-- <img :src="imageSrc" :alt="imageAlt"> -->
        <img src="../assets/images/profile-pic-bw.png" :alt="imageAlt">
      </div>
      <div class="bracket bracket-top-left" :style="bracketStyle"></div>
      <div class="bracket bracket-bottom-right" :style="bracketStyle"></div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    // imageSrc: {
    //   type: String,
    //   required: true
    // },
    imageAlt: {
      type: String,
      default: 'Framed picture'
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 400
    },
    padding: {
      type: Number,
      default: 20
    },
    bracketSize: {
      type: Number,
      default: 40
    },
    bracketThickness: {
      type: Number,
      default: 6
    },
    bracketColor: {
      type: String,
      default: '#915eff'
    }
  });
  
  const containerStyle = computed(() => ({
    width: `${props.width}px`,
    height: `${props.height}px`,
    padding: `${props.padding}px`
  }));
  
  const bracketStyle = computed(() => ({
    width: `${props.bracketSize}px`,
    height: `${props.bracketSize}px`,
    borderWidth: `${props.bracketThickness}px`,
    borderColor: props.bracketColor
  }));
  </script>
  
  <style scoped>
  .frame-container {
    position: relative;
  }
  .frame {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bracket {
    position: absolute;
    border-style: solid;
  }
  .bracket-top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }
  .bracket-bottom-right {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
  </style>