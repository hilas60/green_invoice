const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    allowedHosts: "all",

    proxy: {
      "/api": {
        target: "https://jupiter.d.greeninvoice.co.il/",
        ws: true,
        changeOrigin: true,
      },
    },
    // "https://jupiter.d.greeninvoice.co.il/",
  },
};
