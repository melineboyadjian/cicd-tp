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

  it("handles empty string as name", () => {
    expect(getGreeting("")).toBe("Hello world!");
  });

  it("handles whitespace-only names", () => {
    expect(getGreeting("   ")).toBe("Hello world! From    ");
  });

  it("handles boolean values as name", () => {
    expect(getGreeting(true)).toBe("Hello world! From true");
    expect(getGreeting("false")).toBe("Hello world! From false");
    expect(getGreeting(false)).toBe("Hello world!"); // test si il est truthy / falsy ici falsy, pour être truthy il faut "false"
  });

  it("handles null as name", () => {
    expect(getGreeting(null)).toBe("Hello world!");
  });

  it("handles undefined as name", () => {
    expect(getGreeting(undefined)).toBe("Hello world!");
  });

  it("handles object as name", () => {
    const obj = { name: "Alice" };
    expect(getGreeting(obj)).toBe("Hello world! From [object Object]");
  });

  it("handles array as name", () => {
    const arr = ["Alice", "Bob"];
    expect(getGreeting(arr)).toBe("Hello world! From Alice,Bob");
  });
});
