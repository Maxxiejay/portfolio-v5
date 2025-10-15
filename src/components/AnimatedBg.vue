<template>
  <div id="animated_wrapper">
    <div></div>
    <!-- <div></div> -->
    <div></div>
    <!-- <div></div> -->
    <div></div>
    <!-- <div></div> -->
    <div></div>
    <!-- <div></div> -->
    <div></div>
    <!-- <div></div> -->
  </div>
</template>

<script setup></script>

<style scoped>
  #animated_wrapper {
    top: 0;
    position: absolute;
    height: 50vh;
    width: 100%;
    overflow: hidden;
  }

  #animated_wrapper div {
    position: absolute;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 10px;
    /* padding: 2rem;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); */
    border: 3px solid rgba(145, 94, 255, 0.8);
  }

  #animated_wrapper div:nth-child(1) {
    top: 12%;
    left: 42%;
    animation: random 4s linear infinite;
  }
  #animated_wrapper div:nth-child(2) {
    top: 70%;
    left: 20%;
    animation: random 10s linear infinite;
  }
  #animated_wrapper div:nth-child(3) {
    top: 32%;
    left: 10%;
    animation: random 7.5s linear infinite;
  }
  #animated_wrapper div:nth-child(4) {
    top: 50%;
    left: 50%;
    animation: random 8s linear infinite;
  }
  #animated_wrapper div:nth-child(5) {
    top: 85%;
    left: 88%;
    animation: random 9s linear infinite;
  }
  /* #animated_wrapper div:nth-child(6) {
    top: 17%;
    left: 6%;
    animation: random 5s linear infinite;
  } */
  #animated_wrapper div:nth-child(7) {
    top: 60%;
    left: 10%;
    animation: random 15s linear infinite;
  }
  /* #animated_wrapper div:nth-child(8) {
    top: 92%;
    left: 10%;
    animation: random 8s linear infinite;
  } */
  #animated_wrapper div:nth-child(9) {
    top: 70%;
    left: 64%;
    animation: random 12s linear infinite;
  }
  #animated_wrapper div:nth-child(10) {
    top: 60%;
    left: 99%;
    animation: random 7s linear infinite;
  }

  @keyframes random {
    0% {
      transform: translateY(0) rotate(0deg) scale(0.6);
      opacity: 0;
    }

    50% {
      transform: translateY(-50px) rotate(45deg);
      opacity: 1;
    }

    100% {
      transform: translateY(-100px) rotate(90deg) scale(1);
      opacity: 0;
    }
  }
</style>
