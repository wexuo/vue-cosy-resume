<template>
  <header class="header">
    <div class="avatar-container">
      <img :src="userInfo.avatar" :alt="userInfo.name" class="avatar" />
    </div>
    <div class="social-icons">
      <a
        v-for="link in userInfo.socialLinks"
        :key="link.platform"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-icon"
      >
        <i :class="'fas ' + link.icon"></i>
      </a>
    </div>
    <div class="contact-info">
      <div class="contact-item">
        <span class="contact-item-icon">
          <i class="fas fa-envelope"></i>
        </span>
        <div class="contact-text">
          <span class="label">EMAIL</span>
          <span class="value">{{ userInfo.email }}</span>
        </div>
      </div>
      <div class="contact-item">
        <span class="contact-item-icon">
          <i class="fas fa-phone"></i>
        </span>
        <div class="contact-text">
          <span class="label">PHONE</span>
          <span class="value">{{ userInfo.phone }}</span>
        </div>
      </div>
      <div class="contact-item">
        <span class="contact-item-icon">
          <i class="fas fa-birthday-cake"></i>
        </span>
        <div class="contact-text">
          <span class="label">BIRTHDAY</span>
          <span class="value">{{ userInfo.birthday }}</span>
        </div>
      </div>
      <div class="contact-item">
        <span class="contact-item-icon">
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <div class="contact-text">
          <span class="label">LOCATION</span>
          <span class="value">{{ userInfo.location }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { UserInfo } from "../types/resume";

export default defineComponent({
  props: {
    userInfo: {
      type: Object as PropType<UserInfo>,
      required: true,
    },
  },
});
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 1rem;
}

.avatar-container {
  margin-bottom: 0.5rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2rem 0 4rem;
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 1.5rem;
  transition: color 0.2s ease-in-out;
}

.contact-info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  transition: transform 0.2s ease-in-out;
}

.contact-item:hover {
  transform: translateY(-2px);
}

.contact-item .contact-item-icon {
  font-size: 1.2rem;
  margin-right: 1rem;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 8px;
  position: relative;
}

.contact-item .contact-item-icon:before {
  background: linear-gradient(
    90deg,
    var(--color-primary-3) 0.04%,
    var(--color-primary) 46.04%
  );
  border-radius: 50%;
  content: "";
  filter: blur(5px);
  height: 50%;
  left: 50%;
  opacity: 0.7;
  overflow: visible;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}

.contact-item .contact-item-icon .fas {
  color: var(--color-font);
  width: 1.5rem;
  height: 1.5rem;
}

.contact-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.label {
  font-size: 0.8rem;
  color: #7f8c8d;
  margin-bottom: 0.2rem;
}

.value {
  font-size: 1rem;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .avatar {
    width: 80px;
    height: 80px;
  }

  .social-icons {
    margin-bottom: 1rem;
  }

  .contact-info {
    flex-direction: column;
    align-items: stretch;
  }

  .contact-item {
    justify-content: flex-start;
  }
}
</style>