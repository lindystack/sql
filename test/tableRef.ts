import { makeSync } from "../src/schema/TableRef";

describe("TableRefFromString", () => {
  it("should make a TableRef", () => {
    const tableRef = makeSync("foo.users");
    expect(tableRef).toStrictEqual({ name: "users", schema: "foo" });
  });
  it("should make a TableRe with default schema", () => {
    const tableRef = makeSync("users");
    expect(tableRef).toStrictEqual({ name: "users", schema: "public" });
  });
});
