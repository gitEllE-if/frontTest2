<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro&display=swap");
#app {
  font-family: "Source Sans Pro", serif;
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
  font-family: "Source Sans Pro", serif;
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
  font-family: "Inter";
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
}
</style>
