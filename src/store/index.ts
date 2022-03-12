import { createStore } from "vuex";
import { getUserById, login, logout } from "@/services/UserServices";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    getIsUserLoggedIn(state) {
      return !!state.user;
    },
  },
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
  },
  actions: {
    async loginUser(context, { userCred }) {
      try {
        const res = await login(userCred);
        const user = res.data;
        context.commit({ type: "setUser", user });
        return user;
      } catch (error) {
        console.error("no user found: ", error);
      }
    },
    async logoutUser(context) {
      console.log("logging out user");

      const user = await logout();
      context.commit({ type: "setUser", user: null });
    },
    async getUser(context) {
      const user = await getUserById();
      context.commit({ type: "setUser", user });
    },
  },
  modules: {},
});
