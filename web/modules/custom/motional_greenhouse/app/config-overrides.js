const path = require("path");

module.exports = {
  webpack: function (config, env) {
    config.context = path.resolve("./src");
    config.module.rules.push({
      enforce: "pre",
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ["glob-import-loader"],
    });
    config.output = {
      ...config.output,
      filename: `static/js/main.min.js`,
    };
    config.plugins.map((plugin, i) => {
      if (
        plugin.options &&
        plugin.options.filename &&
        plugin.options.filename.includes("static/css")
      ) {
        config.plugins[i].options = {
          ...config.plugins[i].options,
          filename: "static/css/main.min.css",
          chunkFilename: "static/css/main.min.css",
        };
      }
    });
    return config;
  },
};
