const config = {
    transform: {
      "^.+\\.jsx?$": "babel-jest", // Handle .js and .jsx files using babel-jest
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Optional for CSS modules
    },
    transformIgnorePatterns: [
      "/node_modules/(?!your-es6-package)" // Optional: If you want to transform specific node_modules
    ],
    testEnvironment: "jsdom",
  };
  
  module.exports = config;
  