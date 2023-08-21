import * as Schema from "@effect/schema/Schema";
import * as PR from "@effect/schema/ParseResult";
import { ArraySchema, isRefSchema, RefSchema } from "@lindystack/json-schema";

const ArrayRefSchema = ArraySchema.pipe(
  Schema.transformResult(
    RefSchema,
    (arraySchema) =>
      isRefSchema(arraySchema.items)
        ? PR.success(arraySchema.items)
        : PR.failure(PR.type(RefSchema.ast, arraySchema.items)),
    (items) => PR.success({ items, type: "array" as const }),
  ),
);

type ArrayRefSchema = Schema.To<typeof ArrayRefSchema>;

export { ArrayRefSchema };
