// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.ts', '.tsx'],
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@/(.*)': '<rootDir>/src/$1',
      },
    },
  },
};
