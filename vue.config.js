const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    hot: true,
    open: false,
    proxy: "http://localhost:5050",
  },
});
