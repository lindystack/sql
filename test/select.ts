import { Effect, Layer } from "effect";

import { ObjectSchema, Select } from "../src/tag";
import { SelectLayerLive } from "../src/layer/Select";

const schema = ObjectSchema.of({
  $id: "foo",
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
    bar: { $ref: "foo.bar" },
  },
});

const ObjectSchemaLive = Layer.succeed(
  ObjectSchema,
  schema,
);

const DepsLive = ObjectSchemaLive.pipe(Layer.provide(SelectLayerLive));

const program = Select.pipe(
  Effect.map(({ select, getSelectItems, from }) => ({
    select,
    getSelectItems,
    getJoinItems: from.getJoinItems,
  })),
);

describe("Select", () => {
  it("should select a column", () => {
    const runnable = Effect.provideLayer(program, DepsLive).pipe(
      Effect.flatMap(({ select, getSelectItems }) =>
        select("name").pipe(Effect.flatMap(() => getSelectItems()))
      ),
    );

    const selectItems = Effect.runSync(runnable);

    expect(selectItems).toStrictEqual([
      [
        { schema: "public", name: "foo" },
        {
          key: "name",
          jsonSchema: { type: "string" },
        },
      ],
    ]);
  });
  it("should select a relation", () => {
    const runnable = Effect.provideLayer(program, DepsLive).pipe(
      Effect.flatMap(({ select, getSelectItems }) =>
        select("bar").pipe(Effect.flatMap(() => getSelectItems()))
      ),
    );

    const selectItems = Effect.runSync(runnable);

    expect(selectItems).toStrictEqual([
      [
        { alias: "__bar" },
        {
          key: "bar",
          jsonSchema: { $ref: "foo.bar" },
          kind: "many-to-one",
        },
      ],
    ]);
  });
});
