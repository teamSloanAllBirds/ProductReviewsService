module.exports = {
  'extends': ['airbnb', 'plugin:import/react'],
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx']
      }
    },
    'no-console': 'off'
  },
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    'no-console': 'off'
  }
};