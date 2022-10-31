/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: ".*.(test|spec).(j|t)s[x]?$",
  transform: {
    "node_modules/(react-dnd|dnd-core|@react-dnd)/.+\\.(j|t)sx?$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: [
    `/node_modules/(?!(somePkg)|react-dnd|dnd-core|@react-dnd)`,
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
