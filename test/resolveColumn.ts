import { Effect, Layer } from "effect";

import { resolveColumn } from "../src/effect/ResolveColumn";
import { ObjectSchema } from "../src/tag";
import { TableLayer } from "../src/layer/Table";

const schema = ObjectSchema.of({
  $id: "foo",
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
});

const ObjectSchemaLive = Layer.succeed(
  ObjectSchema,
  schema,
);

const Deps = ObjectSchemaLive.pipe(Layer.provide(TableLayer));

describe("resolveColumn", () => {
  it("should resolve a column", () => {
    const runnable = Effect.provideLayer(resolveColumn, Deps).pipe(
      Effect.flatMap((resolve) => resolve("id")),
    );

    const [ref, col] = Effect.runSync(runnable);

    expect(ref).toStrictEqual({ schema: "public", name: "foo" });
    expect(col).toStrictEqual({ key: "id", jsonSchema: { type: "integer" } });
  });
});
