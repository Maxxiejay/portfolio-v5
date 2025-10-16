import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useActivityStore = defineStore('activity', () => {
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  async function fetchActivity() {
    if (data.value) return // Don't fetch if we already have data

    try {
      loading.value = true
      const res = await fetch('https://portfolio-backend-mkrd.onrender.com/api/activity')
      const json = await res.json()
      data.value = json
      error.value = null
    } catch (err) {
      error.value = err.message
      console.error('Error fetching activity:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    error,
    fetchActivity,
  }
})
