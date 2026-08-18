/** @type {import('stylelint').Config} */
export default {
  // Базовый конфиг проверяет только логические ошибки и синтаксис.
  // Конфликтов с форматированием Prettier здесь нет по умолчанию.
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': '^[a-z][a-zA-Z0-9_-]+$'
  },
  overrides: [
    {
      files: ['src/index.scss'],
      rules: {
        'declaration-block-no-shorthand-property-overrides': null
      }
    }
  ],
  ignoreFiles: ['dist/**/*', 'node_modules/**/*']
}
