export default {
  testEnvironment: "jsdom",
  transform:{
    "^.+\\.tsx?$": "ts-jest"
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts']
}