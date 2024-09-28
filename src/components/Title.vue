<template>
  <p class="title">
    <span class="fa-icon">
      <i :class="'fas ' + icon"></i>
    </span>
    <span class="title-text">{{ text }}</span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.title {
  align-items: center;
  display: flex;
  width: 100%;
}

.title .title-text {
  flex: 1;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  margin: 0;
  padding-left: 1rem;
}
</style>