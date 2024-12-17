<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Hls from 'hls.js';

const props = defineProps({
  src: String,
  title: String
});

const videoRef = ref(null);
let hls = null;

onMounted(() => {
  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(props.src);
    hls.attachMedia(videoRef.value);
  }
});

onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
  }
});
</script>

<template>
  <div class="video-container">
    <div class="video-title">{{ title }}</div>
    <video ref="videoRef" controls autoplay></video>
  </div>
</template>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
}

.video-title {
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 4px;
  z-index: 1;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>