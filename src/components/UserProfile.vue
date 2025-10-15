<template>
  <div class="flex flex-col items-center text-center bg-dark p-6 rounded-2xl shadow-lg w-full max-w-md">
    <img
      :src="user.avatar_url"
      alt="Avatar"
      class="w-24 h-24 rounded-full border-2 border-primary mb-4"
    />
    <h2 class="text-2xl font-semibold">{{ user.name }}</h2>
    <p class="text-gray-400">@{{ user.login }}</p>
    <div class="flex justify-center gap-6 mt-4 text-sm text-gray-300">
      <div><i class="fas fa-book mr-2 text-primary"></i>{{ user.public_repos }} Repos</div>
      <div><i class="fas fa-star mr-2 text-primary"></i>{{ user.total_stars }} Stars</div>
      <div><i class="fas fa-users mr-2 text-primary"></i>{{ user.followers }} Followers</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: Object
})
</script>
