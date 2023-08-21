import { Effect, Layer } from "effect";

import { resolveRef } from "../src/effect/ResolveRef";
import { ObjectSchema } from "../src/tag";
import { TableLayer } from "../src/layer/Table";
import { JoinLayerLive } from "../src/layer/Join";

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

const TableLive = ObjectSchemaLive.pipe(Layer.provide(TableLayer));

const DepsLive = TableLive.pipe(
  Layer.provide(Layer.passthrough(JoinLayerLive)),
);

describe("resolveRef", () => {
  it("should resolve a ref -- many-to-one", () => {
    const runnable = Effect.provideLayer(resolveRef, DepsLive).pipe(
      Effect.flatMap((resolve) => resolve("bar")),
    );

    const [ref, col] = Effect.runSync(runnable);

    expect(ref).toStrictEqual({ alias: "__bar" });
    expect(col).toStrictEqual({
      key: "bar",
      jsonSchema: { $ref: "foo.bar" },
      kind: "many-to-one",
    });
  });
});
