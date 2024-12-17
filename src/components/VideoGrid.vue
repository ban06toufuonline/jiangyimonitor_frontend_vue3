<script setup>
import VideoPlayer from './VideoPlayer.vue';
import { cameras, getVideoUrl } from '../config/cameras';

defineProps({
  gridSize: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="video-grid" :class="{ 'grid-4': gridSize === 4, 'grid-9': gridSize === 9 }">
    <VideoPlayer
      v-for="camera in cameras.slice(0, gridSize)"
      :key="camera.id"
      :src="getVideoUrl(camera.id)"
      :title="camera.name"
    />
  </div>
</template>

<style scoped>
.video-grid {
  display: grid;
  gap: 10px;
  height: calc(100vh - 100px);
  padding: 0 1rem 1rem;
}

.grid-4 {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.grid-9 {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>