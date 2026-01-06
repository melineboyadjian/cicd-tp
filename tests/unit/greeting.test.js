const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns the greeting with name when provided", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
  });

  it("handles numbers in name", () => {
    expect(getGreeting("123")).toBe("Hello world! From 123");
  });

  it("handles special characters in name", () => {
    expect(getGreeting("Alice@#$%")).toBe("Hello world! From Alice@#$%");
  });

  it("handles very long names", () => {
    const longName = "A".repeat(1000);
    const expected = `Hello world! From ${longName}`;
    expect(getGreeting(longName)).toBe(expected);
  });
});
