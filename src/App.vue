<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Source Sans Pro";
  src: url("~@/assets/fonts/SourceSansPro-Regular.ttf.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Source Sans Pro";
  src: url("~@/assets/fonts/SourceSansPro-Semibold.ttf.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Inter";
  src: url("~@/assets/fonts/Inter-SemiBold.ttf");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(255, 254, 251, 0.8);
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  padding: 32px;
  margin: 0 auto;
  max-width: 1440px;
}
.g-title__h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
}
.g-button {
  outline: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  background-color: #7bae73;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #ffffff;
  &:hover {
    background-color: #5ec24e;
  }
  &:disabled {
    color: #b4b4b4;
    background: #eeeeee;
    box-shadow: initial;
  }
  &__animation {
    animation: pulse 1s;
    box-shadow: 0 0 0 2em rgba(#fff, 0);
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 adjust-hue(#7bae73, 45deg);
  }
}
</style>
