<template>
  <div class="login-container">
    <div class="login-image">
      <img alt="login image" src="../assets/illustration-Login-illustration.svg" />
    </div>
    <div class="login-form-container">
      <img class="green-logo" src="../assets/green_logo.svg" alt="green logo" />
      <LoginForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import LogoDrawing from "@assets/green_login_page.svg";
import LoginForm from "./LoginForm.vue";
import "./Login.scss";

export default defineComponent({
  name: "LoginSection",
  props: {
    // msg: String,
  },
  components: {
    LoginForm,
  },
});
</script>
