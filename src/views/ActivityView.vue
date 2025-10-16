<script setup>
import { useActivityStore } from '@/stores/activity'
import { storeToRefs } from 'pinia'

const activityStore = useActivityStore()
// Destructure with storeToRefs to maintain reactivity
const { data, loading, error } = storeToRefs(activityStore)
</script>

<template>
    <div class="min-h-screen bg-dark text-white p-6">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error" class="text-red-400">Error: {{ error }}</div>

        <div v-else-if="data" class="space-y-10">
            <!-- GitHub Section -->
            <section>
                <div class="flex items-center space-x-4">
                    <img :src="data.github.user.avatar" alt="Avatar"
                        class="w-16 h-16 rounded-full border-2 border-primary" />
                    <div>
                        <h1 class="text-2xl font-semibold">{{ data.github.user.name }}</h1>
                        <p class="text-sm text-gray-400">@{{ data.github.user.username }}</p>
                        <p class="text-gray-300">{{ data.github.user.bio }}</p>
                    </div>
                </div>

                <div class="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
                    <span>🌍 {{ data.github.user.location }}</span>
                    <span>🔗 {{ data.github.user.blog }}</span>
                    <span>⭐ {{ data.github.user.total_stars }} stars</span>
                    <span>👥 {{ data.github.user.followers }} followers</span>
                    <span>🧑‍💻 {{ data.github.user.following }} following</span>
                    <span>📦 {{ data.github.user.public_repos }} repos</span>
                </div>

                <h2 class="mt-8 text-xl font-bold text-primary">Recent GitHub Activity</h2>
                <div class="mt-3 space-y-2">
                    <div v-for="(event, i) in data.github.events" :key="i"
                        class="bg-[#0B0E1A] p-3 rounded-xl border border-primary">
                        <a :href="event.url" target="_blank" class="font-medium text-primary hover:underline">
                            {{ event.repo }}
                        </a>
                        <p class="text-gray-400 text-sm">{{ event.type }} • {{ new Date(event.date).toLocaleString() }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Wakatime Section -->
            <section>
                <h2 class="text-xl font-bold text-primary">Wakatime Summary</h2>
                <p class="text-gray-300 mb-3">Total: {{ data.wakatime.total_hours }}</p>

                <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-[#0B0E1A] p-4 rounded-xl">
                        <h3 class="font-semibold mb-2">Languages</h3>
                        <div v-for="(lang, i) in data.wakatime.languages" :key="i"
                            class="flex justify-between text-sm mb-1">
                            <span>{{ lang.name }}</span>
                            <span class="text-gray-400">{{ lang.hours }} ({{ lang.percent.toFixed(1) }}%)</span>
                        </div>
                    </div>

                    <div class="bg-[#0B0E1A] p-4 rounded-xl">
                        <h3 class="font-semibold mb-2">Projects</h3>
                        <div v-for="(proj, i) in data.wakatime.projects" :key="i"
                            class="flex justify-between text-sm mb-1">
                            <span>{{ proj.name }}</span>
                            <span class="text-gray-400">{{ proj.text }} ({{ proj.percent.toFixed(1) }}%)</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.bg-dark {
    background-color: #050816;
}

.text-primary {
    color: #915EFF;
}

.border-primary {
    border-color: #915EFF;
}
</style>
