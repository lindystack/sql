import { Effect, Layer } from "effect";

import { resolveRef } from "../src/effect/ResolveRef";
import { ObjectSchema } from "../src/tag";
import { TableLayer } from "../src/layer/Table";
import { TableDeps } from "../src/layer/TableDeps";
import { JoinItemsLive } from "../src/layer/JoinItems";
import { JoinItemsStateLayer } from "../src/layer/JoinItemsState";
import { JoinLayer } from "../src/layer/Join";

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

const TableLive = ObjectSchemaLive.pipe(Layer.provide(TableDeps)).pipe(
  Layer.provide(TableLayer),
);

const JoinLive = JoinItemsLive.pipe(Layer.provide(JoinItemsStateLayer)).pipe(
  Layer.provide(JoinLayer),
);

const DepsLive = TableLive.pipe(Layer.provide(Layer.passthrough(JoinLive)));

// From, Join, Resolve, SelectItemsState

describe("resolveRef", () => {
  it("should resolve a ref", () => {
    const runnable = Effect.provideLayer(resolveRef, DepsLive).pipe(
      Effect.flatMap((resolve) => resolve("bar")),
    );

    const [ref, col] = Effect.runSync(runnable);

    expect(ref).toStrictEqual({ alias: "__bar" });
    expect(col).toStrictEqual({ key: "bar", jsonSchema: { $ref: "foo.bar" } });
  });
});
