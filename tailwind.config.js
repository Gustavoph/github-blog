/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-nunito)',
      },

      colors: {
        brand: {
          blue: '#3294F8',
        },

        base: {
          input: '#040F1A',
          background: '#071422',
          profile: '#0B1B2B',
          post: '#112131',
          border: '#1C2F41',
          label: '#3A536B',
          span: '#7B96B2',
          text: '#AFC2D4',
          subtitle: '#C4D4E3',
          title: '#E7EDF4',
        },
      },

      backgroundImage: {
        coverImg: "url('/cover.png')",
      },

      height: {
        53: '13.25rem',
      },

      width: {
        104: '26rem',
      },

      margin: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
