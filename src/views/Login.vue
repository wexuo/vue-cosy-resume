<template>
  <div class="login-container">
    <div class="login-overlay"></div>
    <form @submit.prevent="handleConfirm" class="login-form">
      <div class="input-group">
        <input
          v-model="password"
          :class="{ 'input-error': message }"
          type="password"
          placeholder="请输入密码"
          required
        />
        <p v-if="message" class="error-message">
          {{ message }}
        </p>
      </div>
      <button type="submit" class="login-button">确认</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const password = ref("");
    const message = ref("");

    const handleConfirm = () => {
      const correctPassword = import.meta.env.VITE_LOGIN_PASSWORD as string;
      if (password.value === correctPassword) {
        localStorage.setItem("LOGIN_PASSWORD", password.value);
        router.push("/");
      } else {
        message.value = "密码不正确";
      }
    };

    return {
      password,
      message,
      handleConfirm,
    };
  },
});
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url("https://cdn.seovx.com/d/?mom=302");
  background-size: cover;
  background-position: center;
  position: relative;
}

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.login-form {
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.input-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  border-color: #4a90e2;
  background-color: rgba(255, 255, 255, 0.8);
}

.input-error {
  border-color: #ff4d4f;
}

.error-message {
  color: #ff4d4f;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.login-button {
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: rgba(74, 144, 226, 0.8);
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: block;
  margin: 0 auto;
}

.login-button:hover {
  background-color: rgba(53, 122, 189, 0.9);
}
</style>