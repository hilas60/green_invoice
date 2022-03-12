<template>
  <div class="form-container">
    <h2>היי, טוב לראות אותך</h2>
    <form class="form">
      <div class="login-email-input">
        <input v-model.trim="email" placeholder="מייל" />
        <span>כתובת המייל איתה נרשמת לחשבונית ירוקה</span>
      </div>
      <div class="login-password-input">
        <input v-model.trim="password" placeholder="סיסמה" type="password" />
        <a class="forgot-password">?שכחת סיסמה</a>
      </div>
    </form>
    <div class="login-btns-container">
      <div class="login-btns">
        <button class="sso-button">
          <img src="../assets/Google_G.svg" alt="google logo" />
          <span>כניסה מהירה</span>
        </button>
        <button @click="loginHandle" class="signin-button">כניסה</button>
      </div>
      <div class="trial-link-container">
        עוד לא הצטרפת?
        <a href="/"> ל-30 יום ניסיון חינם </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";

export default defineComponent({
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    resetData() {
      this.email = "";
      this.password = "";
    },
    async loginHandle() {
      console.log(`logging in as ${this.email} with password: ${this.password}`);
      const user = await this.$store.dispatch({
        type: "loginUser",
        userCred: { email: this.email, password: this.password },
      });
      console.log("login user: ", user);
      if (user) this.$router.push(`/welcome`);
      this.resetData();
    },
  },
});
</script>
