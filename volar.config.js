const baseConfig = require("./.eslintrc"); // load your project eslint config

module.exports = {
  plugins: [
    require("@volar-plugins/eslint")((program) => ({
      ...baseConfig,
      ignorePatterns: ["**/*.vue.*"], // ignore virtual files: *.vue.ts, *.vue.html, *.vue.css
      parserOptions: {
        ...baseConfig.parserOptions,
        programs: [program], // replace eslint typescript program
      },
    })),
  ],
};
