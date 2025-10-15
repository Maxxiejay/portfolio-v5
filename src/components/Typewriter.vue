<template>
  <span class="typewriter-text text-tetairy">{{ currentText }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  text: Array
});

let text = props.text;
let currentText = ref('');
let index = 0;
let currentWordIndex = 0;
let isDeleting = false;

const typeWriter = () => {
  if (currentWordIndex === text.length) {
    currentWordIndex = 0;
  }

  if (!isDeleting && index <= text[currentWordIndex].length) {
    currentText.value += text[currentWordIndex].charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }

  if (isDeleting && index > 0) {
    currentText.value = currentText.value.substring(0, currentText.value.length - 1);
    index--;
    setTimeout(typeWriter, 100);
  }

  if (!isDeleting && index === text[currentWordIndex].length) {
    setTimeout(() => {
      isDeleting = true;
      typeWriter();
    }, 1000);
  }

  if (isDeleting && index === 0) {
    currentText.value = '';
    isDeleting = false;
    currentWordIndex++;
    setTimeout(typeWriter, 500);
  }
}

onMounted(typeWriter);
</script>

<style scoped>
.typewriter-text::after {
  color: #fff;
  content: '|';
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>