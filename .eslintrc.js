module.exports = {
    parser: '@typescript-eslint/parser', // Указывает ESLint использовать TypeScript парсер
    parserOptions: {
        ecmaVersion: 2020, // Поддержка последних возможностей ECMAScript
        sourceType: 'module', // Использует ES6 модули
        ecmaFeatures: {
            jsx: true, // Поддержка JSX для React
        },
        project: './tsconfig.json', // Указывает на ваш tsconfig.json
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks'], // Подключаемые плагины
    extends: [
        'eslint:recommended', // Базовые правила ESLint
        'plugin:@typescript-eslint/recommended', // Рекомендации от TypeScript ESLint
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended', // Рекомендации для React
        'plugin:react-hooks/recommended', // Рекомендации для хуков React
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'error', // Запрещает использование any
        '@typescript-eslint/explicit-function-return-type': 'warn', // Требует указания типов возвращаемых значений
        '@typescript-eslint/explicit-module-boundary-types': 'warn', // Требует типы для экспортируемых функций и методов
        '@typescript-eslint/no-non-null-assertion': 'warn', // Запрещает использование оператора '!'
        'react/prop-types': 'off', // Отключаем проверку типов пропсов, если используем TypeScript
        'react-hooks/rules-of-hooks': 'error', // Проверка правильного использования хуков
        'react-hooks/exhaustive-deps': 'warn', // Проверка зависимости для useEffect
        'no-console': 'warn', // Предупреждение при использовании console.log
        'no-debugger': 'error', // Ошибка при использовании debugger
    },
    settings: {
        react: {
            version: 'detect', // Автоматически определяет версию React
        },
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
};
