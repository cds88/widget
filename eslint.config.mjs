import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    extends: ['plugin:@typescript-eslint/recommended'],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      quotes: ['error', 'single'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
 
];
