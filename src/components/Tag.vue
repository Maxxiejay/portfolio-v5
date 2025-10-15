<template>
  <div id="tag"
  >
    {{ name }}
  </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String
    },
})

</script>

<style scoped>
  #tag {
    display: inline;
    width: fit-content;
    height: fit-content;
    background: transparent;
    padding: 0px 5px;
    margin: 0 5px;
    border: 2px solid;
    border-radius: 0.5rem;
    font-size: 0.8rem;
     
    font-weight: bold;
  }
</style>
