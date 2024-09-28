<template>
  <div class="resume">
    <div class="resume-content">
      <div class="content">
        <Header :userInfo="resume.userInfo" />
        <Skills :skills="resume.skills" />
        <Education :education="resume.education" />
        <Experience :experiences="resume.experiences" />
        <Projects :projects="resume.projects" />
        <Portfolio :portfolio="resume.portfolio" />
      </div>
      <Footer :footer="resume.footer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import Education from "../components/Education.vue";
import Projects from "../components/Projects.vue";
import Portfolio from "../components/Portfolio.vue";
import Footer from "../components/Footer.vue";
import resume from "../data/resume";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Skills,
    Experience,
    Education,
    Projects,
    Portfolio,
    Footer,
  },
  data() {
    return {
      resume,
    };
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url("https://cdn.seovx.com/d/?mom=302");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
}
</style>

<style scoped>
.resume {
  max-width: 100%;
  margin: 0;
  padding: 40px 0;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.resume-content {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  max-width: 1000px;
  width: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.content {
  padding: 50px;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .resume {
    padding: 20px 0;
  }

  .resume-content {
    margin: 0 15px;
    border-radius: 8px;
  }

  .content {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .resume {
    padding: 10px 0;
  }

  .resume-content {
    margin: 0 10px;
    border-radius: 6px;
  }

  .content {
    padding: 20px;
  }
}
</style>