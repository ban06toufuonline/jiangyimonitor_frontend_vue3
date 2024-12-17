<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTableCells, faGrip } from '@fortawesome/free-solid-svg-icons';

defineProps({
  gridSize: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['toggle-grid']);
</script>

<template>
  <header class="header">
    <h1 class="title">江义村AI视频监控</h1>
    <button class="grid-toggle" @click="$emit('toggle-grid')">
      <FontAwesomeIcon
        :icon="gridSize === 4 ? faTableCells : faGrip"
        class="icon"
      />
    </button>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}

.title {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.grid-toggle {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.grid-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: white;
}

.icon {
  font-size: 1.2rem;
}
</style>