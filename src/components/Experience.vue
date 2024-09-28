<template>
  <section class="resume-section experience">
    <Title icon="fa-briefcase" text="工作经验" />
    <TimelineItem
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :period="item.period"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TimelineItem from "./TimelineItem.vue";
import { Experience } from "../types/resume";
import Title from "./Title.vue";
export default defineComponent({
  name: "Experience",
  components: {
    TimelineItem,
    Title,
  },
  props: {
    experiences: {
      type: Array as PropType<Experience[]>,
      required: true,
    },
  },
  setup(props) {
    const items = props.experiences.map((item) => {
      return {
        title: item.company + " · " + item.position,
        period: `${item.startDate} - ${item.endDate}`,
      };
    });
    return {
      items,
    };
  },
});
</script>

<style scoped>
</style>