const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
// const { createVuePlugin } = require("unplugin-vue-components/webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: true,
        eslintrc: {
          enabled: true, // <-- this
        },
      }),
      // createVuePlugin(),
    ],
  },
});
