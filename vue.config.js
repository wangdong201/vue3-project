const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const AutoImportComponents = require("unplugin-vue-components/webpack");
const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");
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
      AutoImportComponents({
        dts: true,
        // eslint-disable-next-line no-undef
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
    ],
  },
});
