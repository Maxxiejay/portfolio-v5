<template>
  <Navbar />
  <Preloader />
  <custom-cursor :targets="['img', 'a', 'i', 'btn', 'btn-alt', 'button']" :circleColor="'#915EFF'"
    :circleColorHover="'#915EFF'" :dotColor="'#915EFF'" :dotColorHover="'#915EFF'" :hoverSize="1.8"></custom-cursor>
  <router-view v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </router-view>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import CustomCursor from "@/components/CustomCursor.vue"
import Preloader from "@/components/Preloader.vue";
import { useActivityStore } from '@/stores/activity'
import { onMounted } from 'vue'

const activityStore = useActivityStore()

onMounted(() => {
  // Fetch activity data when app loads
  activityStore.fetchActivity()
})
</script>

<style>
* {
  cursor: none;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media screen and (min-width: 800px) {
  #app {
    padding-top: 8rem;
  }
}
</style>
