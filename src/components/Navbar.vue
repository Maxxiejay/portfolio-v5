<template>
  <div id="navbar-desktop" class="hidden md:flex justify-between w-3/4 text-white">
    <!-- <div class="glow-panel absolute top-0 left-0 w-full h-full"></div> -->
    <div class="name">Max<span class="text-primary">well</span></div>
    <div class="nav-items flex gap-6 items-center">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
      <RouterLink :to="{ name: 'activity' }">Activity</RouterLink>
      <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
    </div>
  </div>

  <!-- Mobile nav -->

  <div id="navbar" class="md:hidden text-white grid items-center gap-4 navbar" :class="{ show: showMenu === true }">
    <RouterLink :to="{ name: 'home' }" class="flex flex-col items-center" v-if="showMenuItems">
      <i class="fa-regular fa-home"></i>
      <span class="text-white text-sm">Home</span>
    </RouterLink>
    <RouterLink :to="{ name: 'about' }" class="flex flex-col items-center" v-if="showMenuItems">
      <i class="fa-regular fa-user"></i>
      <span class="text-white text-sm">About</span>
    </RouterLink>
    <RouterLink :to="{ name: 'activity' }" class="flex flex-col items-center" v-if="showMenuItems">
      <i class="fa-light fa-bolt"></i>
      <span class="text-white text-sm">Activity</span>
    </RouterLink>
    <RouterLink :to="{ name: 'projects' }" class="flex flex-col items-center" v-if="showMenuItems">
      <i class="fa-regular fa-briefcase"></i>
      <span class="text-white text-sm">Projects</span>
    </RouterLink>
    <div id="menu_btn" class="flex items-center justify-center h-fit" @click="handleMenuToggle" v-if="!showMenu">
      <i class="fa-regular fa-grid-2 self-end"></i>
    </div>
    <div id="menu_btn" class="flex items-center justify-center h-fit" @click="handleMenuToggle" v-if="showMenuItems">
      <i class="fa-regular fa-close self-end"></i>
    </div>
    <RouterLink :to="{ name: 'contact' }" class="flex flex-col items-center" v-if="showMenuItems">
      <i class="fa-regular fa-at"></i>
      <span class="text-white text-sm">Contact</span>
    </RouterLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showMenu = ref(false);
const showMenuItems = ref(false);

const handleMenuToggle = () => {
  showMenu.value = !showMenu.value;
  if (showMenuItems.value == false) {
    setTimeout(() => {
      showMenuItems.value = true;
    }, 300);
  } else {
    showMenuItems.value = false;
  }
};
</script>

<style>
#navbar {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  background: rgba(143, 92, 255, 0.2);
  backdrop-filter: blur(5px);
  position: fixed;
  bottom: 1.5rem;
  padding: 5px 10px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out !important;
  animation: shrink 0.2s ease-in-out;
  z-index: 999999;
}

.show {
  /* width: 90%; */
  animation: expand 0.2s ease-in-out forwards !important;
  grid-template-columns: repeat(3, 1fr);
}

#menu_btn {
  font-size: 1.5rem;
}

#navbar-desktop {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
  background: var(--dark);
  overflow: hidden;
  z-index: 9999;
}

#navbar-desktop .name {
  font-size: 1.5rem;
  font-weight: bold;

}

#navbar-desktop .nav-items{
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1rem;
}

.glow-panel{
  width: 20px;
  background: linear-gradient(45deg, rgba(5, 8, 22, 0) 0%, rgba(131, 85, 231, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);
  animation: trail 25s ease-in-out infinite;
  z-index: -1;
}

@keyframes expand {
  0% {
    width: 40px;
  }

  25% {
    width: 45%;
  }

  50% {
    width: 90%;
    height: 40px;
  }

  75% {
    height: 50px;
  }

  100% {
    height: 130px;
    width: 90%;
  }
}

@keyframes shrink {
  0% {
    height: 130px;
    width: 90%;
  }

  25% {
    height: 50px;
  }

  50% {
    width: 90%;
    height: 40px;
  }

  75% {
    width: 45%;
  }

  100% {
    width: 40px;
  }
}

@keyframes trail {
  0%{
    transform: translateX(-100%);
  }
  50%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
}
</style>
