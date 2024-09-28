<template>
  <div class="timeline-item">
    <div class="timeline-content">
      <p class="name">{{ title }}</p>
      <p class="period">{{ period }}</p>
      <div class="description">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.timeline-item {
  position: relative;
  border-left: 1px solid var(--color-border-2);
  margin-left: 17px;
  padding: 0 0 1.5rem 2rem;
  position: relative;
  z-index: 10;
}

.timeline-item:last-child {
  border-left: 0;
}

.timeline-item::before {
  background: var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 0.25rem var(--color-bg-3);
  content: "";
  height: 0.6rem;
  left: -0.3rem;
  position: absolute;
  top: 0.5rem;
  width: 0.6rem;
}

.timeline-item .name {
  align-items: center;
  color: var(--color-font);
  display: flex;
  font-size: 1rem;
  margin: 0;
}
.timeline-item .period {
  color: var(--color-font-2);
  font-size: 15px;
  font-weight: 400;
  line-height: 1;
}

@media (max-width: 768px) {
}
</style>