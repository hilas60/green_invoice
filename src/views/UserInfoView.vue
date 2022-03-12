<template>
  <div class="user-info">
    user:
    <pre
      >{{ user }}
      </pre
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserInfoView",
  computed: {
    user() {
      const user = this.$store.state.user;
      console.log({ user });
      return user;
    },
  },
});
</script>
<style lang="scss">
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: purple;
}
</style>
