module.exports = {
  linters: {
    'package.json': ['yarn format:package-json', 'git add'],
    '.editorconfig': ['prettier --write', 'git add'],
    LICENSE: ['prettier --write', 'git add'],
    '**/*.md': ['markdownlint'],
    '**/*.{css,gql,graphql,html,json,less,md,mdx,scss,vue,yaml,yml}': [
      'prettier --write',
      'git add',
    ],
    '**/*.{js,jsx,ts,tsx}': [
      'import-sort --write',
      'prettier --write',
      "eslint --ext '.js,.jsx,.ts,.tsx' --fix",
      'git add',
    ],
    '**/*.{js,jsx,ts,tsx,css}': [
      'prettier --write',
      'stylelint --fix',
      'git add',
    ],
  },
  // The formatting tools are ordered to run sequentially
  concurrent: false,
};
