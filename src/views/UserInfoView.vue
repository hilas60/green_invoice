<template>
  <div class="user-info">
    user:
    <div>
      <p>Name: {{ user.firstName + " " + user.lastName }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Phone No.: {{ user.phone }}</p>
      <p>
        Subscription Start Date: {{ new Date(user.signUpDate * 1000).toString().substring(4, 15) }}
      </p>
      <p>
        Subscription Expiration Date:
        {{ new Date(user.subscriptionExpirationDate * 1000).toString().substring(4, 15) }}
      </p>
      <div>
        Businesses:
        <li v-for="business in user.businesses" :key="business.id">{{ business.name }}</li>
      </div>
    </div>

    <pre>
 {{ user }}
    </pre>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserInfoView",
  computed: {
    user() {
      return this.$store.state.user;
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
}
</style>
