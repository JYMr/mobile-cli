const INLINE_ELEMENTS = [
  'a',
  'abbr',
  'audio',
  'b',
  'bdi',
  'bdo',
  'canvas',
  'cite',
  'code',
  'data',
  'del',
  'dfn',
  'em',
  'i',
  'iframe',
  'ins',
  'kbd',
  'label',
  'map',
  'mark',
  'noscript',
  'object',
  'output',
  'picture',
  'q',
  'ruby',
  's',
  'samp',
  'small',
  'span',
  'strong',
  'sub',
  'sup',
  'svg',
  'time',
  'u',
  'var',
  'video'
]

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0,
    quotes: [2, 'single'],
    semi: [2, 'never'],
    camelcase: [0, { properties: 'always' }],
    'no-extra-semi': 2, // 禁止不必要的分号
    'arrow-parens': 0, // 当它们只有一个参数时，箭头函数可以省略括号
    'no-new': 0,
    'no-tabs': 1,
    'space-before-function-paren': 0,
    'no-extend-native': 0,
    'no-trailing-spaces': 0,
    'generator-star-spacing': 'off',
    'no-mixed-spaces-and-tabs': 'off', // ['error', 'smart-tabs'] // 不允许使用混合空格和制表符进行缩进
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['provide', 'inject'],
          ['directives', 'components'],
          ['delimiters', 'comments'],
          ['props', 'propsData'],
          'data',
          'computed',
          'filters',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 2,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', ...INLINE_ELEMENTS],
        allowEmptyLines: false
      }
    ],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }]
  }
}
