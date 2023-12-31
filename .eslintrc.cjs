module.exports = {
  env: { browser: true, es2020: true },
  extends: ['./node_modules/standard/eslintrc.json'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off'
  }
}
