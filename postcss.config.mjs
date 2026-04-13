/** @type {import('postcss-load-config').Config} */

const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // C'est ici que le changement s'opère
    'autoprefixer': {},
  },
};

export default config;
