<template>
  <a :href="work.link" target="_blank" rel="noopener noreferrer" class="card">
    <div class="title">{{ work.title }}</div>
    <p class="desc">{{ work.description }}</p>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Portfolio } from "../types/resume";

export default defineComponent({
  props: {
    work: {
      type: Object as PropType<Portfolio>,
      required: true,
    },
  },
});
</script>

<style scoped>
.card {
  display: inline-block;
  padding: 24px;
  text-decoration: none;
  border: 1px solid var(--color-border-2);
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: var(--color-bg-2);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card .title {
  align-items: center;
  display: flex;
  font-size: 16px;
  gap: 12px;
  color: var(--color-font);
}
.card .desc {
  color: var(--color-font-2);
  line-height: 1.5;
  margin: 0;
  padding-top: 12px;
}
</style>