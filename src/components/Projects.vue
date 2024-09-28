<template>
  <section class="projects">
    <Title icon="fa-project-diagram" text="项目经验" />
    <div v-for="(project, index) in projects" :key="index" class="project">
      <p class="project-name">{{ project.name }}</p>
      <p class="project-desc">{{ project.description }}</p>
      <ul class="project-details">
        <li v-for="(detail, idx) in project.details" :key="idx">
          {{ detail }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "../types/resume";
import Title from "./Title.vue";
export default defineComponent({
  components: {
    Title,
  },
  props: {
    projects: {
      type: Array as PropType<Project[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.projects {
  margin-bottom: 0.5rem;
}

.project {
  border-left: 1px solid var(--color-border-2);
  margin-left: 17px;
  padding: 0 0 0.5rem 2rem;
  position: relative;
  z-index: 10;
}
.project:before {
  background: var(--color-primary);
  border-radius: 50%;
  box-shadow: 0 0 0 0.25rem var(--color-bg-3);
  content: "";
  height: 0.6rem;
  left: -0.3rem;
  position: absolute;
  top: 0.3rem;
  width: 0.6rem;
}
.project-name {
  align-items: center;
  color: var(--color-font);
  display: flex;
  font-size: 1rem;
  margin: 0;
  background: linear-gradient(45deg, var(--color-bg-3), transparent);
  border-radius: var(--radius-base, 4px) 0 0 var(--radius-base, 4px);
  padding: 0.5rem;
  transform: translateY(-0.6rem);
}
.project-desc {
  color: var(--color-font-2);
  line-height: 1.5;
  margin: 0;
  padding: 0.5rem 0 1rem;
}
.project-details {
  list-style: square;
  padding-left: 24px;
}
.project-details li {
  line-height: 2;
  margin-bottom: 1rem;
}
</style>
