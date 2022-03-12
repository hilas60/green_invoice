<template>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/fonts.scss";
* {
  box-sizing: border-box !important;
}
body {
  margin: unset;
}
#app {
  font-family: "almoni-neue-dl", sans-serif;
}

input,
button {
  all: unset;

  :active,
  :focus {
    all: unset;
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
button {
  cursor: pointer;
}
/* nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
