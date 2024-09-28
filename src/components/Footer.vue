<template>
  <footer class="footer">
    <div class="footer-content">
      <p v-if="footer.copyright">{{ footer.copyright }}</p>
      <p v-if="footer.customText" v-html="footer.customText"></p>
      <p v-if="footer.icp">{{ footer.icp }}</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Footer } from "../types/resume";

export default defineComponent({
  name: "Footer",
  props: {
    footer: {
      type: Object as PropType<Footer>,
      required: true,
    },
  },
});
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(248, 248, 248, 0.9);
  padding: 10px 20px;
  font-size: 11px;
  color: #555;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1000;
}

.footer:hover {
  transform: translateX(-50%) translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.footer-content p {
  margin: 0;
  transition: color 0.3s ease;
}

.footer-content p:hover {
  color: #333;
}

@media (max-width: 768px) {
  .footer {
    padding: 8px 15px;
    font-size: 10px;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
}
</style>