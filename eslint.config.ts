import { eslint } from '@mkas3/eslint';

export default eslint(
  {
    exports: true,
    imports: true,
    jsxA11y: true,
    next: true,
    react: true,
    stylistic: true,
    tailwind: true,
    typescript: {
      filesTypeAware: [''],
      tsconfigPath: 'tsconfig.json'
    }
  },
  {
    rules: {
      'react-refresh/only-export-components': 'off',
      'tailwind/no-arbitrary-value': 'off'
    }
  }
);
