<script setup>
import { ref } from 'vue';
import Header from './Header.vue';
import VideoGrid from './VideoGrid.vue';

const gridSize = ref(4);

const toggleGridSize = () => {
  gridSize.value = gridSize.value === 4 ? 9 : 4;
};
</script>

<template>
  <div class="monitor-container">
    <Header :grid-size="gridSize" @toggle-grid="toggleGridSize" />
    <VideoGrid :grid-size="gridSize" />
  </div>
</template>

<style scoped>
.monitor-container {
  width: 100vw;
  height: 100vh;
  background: #1a1a1a;
}
</style>