<template>
  <section class="education">
    <Title icon="fa-graduation-cap" text="教育背景" />
    <div class="timeline">
      <TimelineItem
        v-for="(edu, index) in education"
        :key="index"
        :title="edu.school + ' · ' + edu.degree + ' · ' + edu.major"
        :period="edu.startDate + ' - ' + edu.endDate"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Education } from "../types/resume";
import TimelineItem from "./TimelineItem.vue";
import Title from "./Title.vue";

export default defineComponent({
  components: {
    TimelineItem,
    Title,
  },
  props: {
    education: {
      type: Array as PropType<Education[]>,
      required: true,
    },
  },
});
</script>

<style scoped>

</style>