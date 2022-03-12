<template>
  <div class="welcome">
    <h1>“Hello {{ user.firstName }}, welcome to your {{ user.billingBusinessName }}”.</h1>
    <button class="details-btn" @click="handleDetailsClick">user details</button>
    <button class="logout-btn" @click="handleLogout">Logout</button>
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
  button {
    width: 150px;
    margin: 10px;
  }
  .details-btn {
    border: 1px solid #0084f4;
    color: #0084f4;
  }
  .logout-btn {
    background: #0084f4;
    color: white;
  }
}
</style>
