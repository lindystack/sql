import { ObjectSchema } from "@lindystack/json-schema";
import * as Schema from "@effect/schema/Schema";
import { PartitionedProperties } from "../src/schema";

const foo: ObjectSchema = {
  $id: "foo",
  type: "object",
  properties: {
    bar: { type: "string" },
    baz: { $ref: "baz" },
    qux: { type: "array", items: { $ref: "qux" } },
  },
};

describe("PartitionedProperties", () => {
  it("should partition properties into columns and relations", () => {
    const result = Schema.decodeSync(PartitionedProperties)(foo);
    expect(result).toStrictEqual([
      [{
        key: "bar",
        jsonSchema: { type: "string" },
      }],
      [
        { key: "baz", jsonSchema: { $ref: "baz" }, kind: "many-to-one" },
        {
          key: "qux",
          jsonSchema: { type: "array", items: { $ref: "qux" } },
          kind: "one-to-many",
        },
      ],
    ]);
  });
});
