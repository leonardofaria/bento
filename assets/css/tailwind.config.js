const themeDir = __dirname + '/../../';

module.exports = {
  purge: {
    content: [
      './layouts/**/*.html', 
      './content/**/*.md', 
      './content/**/*.html',
      themeDir + 'layouts/**/*.html',
      themeDir + 'exampleSite/content/**/*.html',
      themeDir + 'exampleSite/content/**/*.md',
    ],
  },
  theme: {
    fontFamily: {
      sans: [
        'Inter', // Add Inter
        'system-ui', // Add default values
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
      serif: [
        'Georgia', 
        'Cambria', 
        'Times New Roman', 
        'Times', 
        'serif',
      ],
      mono: [
        'Menlo', 
        'Monaco', 
        'Consolas', 
        'Liberation Mono', 
        'Courier New', 
        'monospace'
      ]
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    // Tweak letter-spacing according to Inter recommendations
    // https://rsms.me/inter/dynmetrics/
    // https://twitter.com/samselikoff/status/1203181354311208960

    function({ addUtilities, theme }) {
      const fontSizes = theme("fontSize", {});

      Object.keys(fontSizes).forEach(key => {
        let fontSize = fontSizes[key][0];

        console.log(fontSize);
        let pixels = +fontSize.replace('rem', '');
        let tracking = -0.0223 + 0.185 * Math.exp(-0.1745 * pixels);

        addUtilities(
          {
            [`.text-${key}`]: {
              "font-size": fontSize,
              "letter-spacing": `${tracking}rem`,
            },
          },
          ["responsive"]
        )
      })
    },
  ],
}
