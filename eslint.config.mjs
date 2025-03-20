import next from "@next/eslint-plugin-next";

export default [
  {
    plugins: {
      "@next/next": next,
    },
    rules: {
      // Add your custom rules here
    },
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      // Rules for JavaScript and TypeScript files
    },
  },
];