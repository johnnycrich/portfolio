const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
    style: async ({ content, attributes }) => {
      if (attributes.type !== "text/postcss") return
      return new Promise((resolve, reject) => {
        resolve({ code: "", map: "" })
      })
    }
  }),
};