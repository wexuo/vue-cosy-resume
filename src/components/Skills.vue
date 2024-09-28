<template>
  <section class="skills">
    <Title icon="fa-cogs" text="技能专长" />
    <ul class="skill">
      <li v-for="(skill, index) in skills" :key="index">
        {{ skill }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "./Title.vue";

export default defineComponent({
  components: {
    Title,
  },
  props: {
    skills: Array,
  },
});
</script>

<style scoped>
.skill {
  list-style: disc;
  padding-bottom: 0.5rem;
  padding-left: 24px;
}

.skill li {
  background-color: var(--color-bg-secondary);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}
</style>