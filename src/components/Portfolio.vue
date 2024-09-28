<template>
  <section class="resume-section portfolio">
    <Title icon="fa-folder-open" text="作品集" />
    <div class="portfolio-grid">
      <PortfolioCard
        v-for="(work, index) in portfolio"
        :key="index"
        :work="work"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Portfolio } from "../types/resume";
import Title from "./Title.vue";
import PortfolioCard from "./PortfolioCard.vue";

export default defineComponent({
  components: {
    Title,
    PortfolioCard,
  },
  props: {
    portfolio: {
      type: Array as PropType<Portfolio[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
.portfolio {
  margin-bottom: 100px;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>