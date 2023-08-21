import * as Schema from "@effect/schema/Schema";
import { ArrayRefSchema } from "../src/schema/ArrayRef";

describe("ArrayRefSchema", () => {
  it("should parse an array ref schema", () => {
    const schema = {
      type: "array",
      items: {
        $ref: "foo.bar",
      },
    };

    const result = Schema.parseSync(ArrayRefSchema)(schema);

    expect(result).toStrictEqual({
      $ref: "foo.bar",
    });
  });
});
