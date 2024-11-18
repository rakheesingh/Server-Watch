module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.svg$': 'jest-transform-stub',
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: "jsdom",

  };
  