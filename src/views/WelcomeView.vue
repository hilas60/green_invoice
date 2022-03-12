<template>
  <div class="welcome">
    <h1>“Hello {{ user.firstName }}, welcome to your {{ user.billingBusinessName }}”.</h1>
    <a @click="handleDetailsClick">user details</a>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WelcomeView",
  data() {
    return { isLogin: false };
  },
  methods: {
    handleDetailsClick() {
      this.$router.push(`/user`);
    },
    async handleLogout() {
      await this.$store.dispatch("logoutUser");
      this.$router.push(`/`);
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
});
</script>
<style lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: purple;
}
</style>
