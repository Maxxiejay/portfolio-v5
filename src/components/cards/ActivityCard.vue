<template>
  <div class="bg-[#0d0f2a] p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
    <div class="flex items-center justify-between mb-2">
      <h3 class="font-semibold text-lg">{{ item.repo }}</h3>
      <span class="text-xs text-gray-400">{{ formatDate(item.date) }}</span>
    </div>
    <p class="text-sm text-gray-300 mb-2">{{ item.type }}</p>
    <a
      :href="item.url"
      target="_blank"
      class="text-primary text-sm hover:underline"
    >
      View on GitHub <i class="fas fa-arrow-up-right-from-square ml-1"></i>
    </a>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>
