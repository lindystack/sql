import { make } from "../src/schema/Lookup";

describe("Lookup", () => {
  it("should make a Lookup from a string", () => {
    const lookup = make("user.posts");
    expect(lookup).toStrictEqual([{ key: "user" }, { key: "posts" }]);
  });
  it("should make a Lookup from a string", () => {
    const lookup = make("user");
    expect(lookup).toStrictEqual([{ key: "user" }]);
  });
});
