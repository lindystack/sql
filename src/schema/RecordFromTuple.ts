import * as Schema from "@effect/schema/Schema";

const ObjectEntry = Schema.tuple(Schema.string, Schema.any).pipe(
  Schema.maxItems(2),
);
