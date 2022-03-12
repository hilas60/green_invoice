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
  color: #23445a;
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
  border-radius: 100px;
  min-height: 56px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
}
</style>
