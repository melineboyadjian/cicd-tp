const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the greeting with name when provided", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
  });
});
