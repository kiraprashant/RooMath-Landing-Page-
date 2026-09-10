/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Cmp/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      "colors": {
              "error": "#ffb4ab",
              "tertiary-fixed": "#ffdbcd",
              "secondary": "#adc6ff",
              "on-primary-fixed-variant": "#003ea8",
              "inverse-surface": "#dae2fd",
              "inverse-on-surface": "#283044",
              "on-tertiary-container": "#ffede6",
              "on-secondary-fixed-variant": "#004395",
              "inverse-primary": "#0053db",
              "tertiary": "#ffb596",
              "on-secondary": "#002e6a",
              "surface-container-high": "#222a3d",
              "background": "#0b1326",
              "surface-container-highest": "#2d3449",
              "on-secondary-fixed": "#001a42",
              "primary-fixed": "#dbe1ff",
              "outline": "#8d90a0",
              "on-error-container": "#ffdad6",
              "surface-dim": "#0b1326",
              "surface": "#0b1326",
              "on-secondary-container": "#e6ecff",
              "on-primary-fixed": "#00174b",
              "on-primary-container": "#eeefff",
              "secondary-fixed": "#d8e2ff",
              "outline-variant": "#434655",
              "error-container": "#93000a",
              "on-tertiary-fixed": "#360f00",
              "on-background": "#dae2fd",
              "secondary-container": "#0566d9",
              "on-surface-variant": "#c3c6d7",
              "surface-bright": "#31394d",
              "tertiary-container": "#bc4800",
              "surface-container-lowest": "#060e20",
              "surface-variant": "#2d3449",
              "on-error": "#690005",
              "on-primary": "#002a78",
              "primary": "#b4c5ff",
              "surface-tint": "#b4c5ff",
              "surface-container": "#171f33",
              "on-tertiary-fixed-variant": "#7d2d00",
              "on-surface": "#dae2fd",
              "primary-container": "#2563eb",
              "on-tertiary": "#581e00",
              "surface-container-low": "#131b2e",
              "primary-fixed-dim": "#b4c5ff",
              "tertiary-fixed-dim": "#ffb596",
              "secondary-fixed-dim": "#adc6ff"
      },
      "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
      },
      "spacing": {
              "margin-mobile": "16px",
              "gutter": "24px",
              "unit": "4px",
              "margin-desktop": "64px",
              "container-max": "1280px"
      },
      "fontFamily": {
              "headline-lg": ["Geist"],
              "label-sm": ["Geist"],
              "label-md": ["Geist"],
              "headline-md": ["Geist"],
              "body-lg": ["Inter"],
              "body-md": ["Inter"],
              "headline-lg-mobile": ["Geist"],
              "display-lg": ["Geist"]
      },
      "fontSize": {
              "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
              "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
              "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
              "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
              "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
              "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
              "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
              "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      }
    },
  },

  plugins: [],
};