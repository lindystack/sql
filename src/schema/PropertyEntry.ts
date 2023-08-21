import * as Schema from "@effect/schema/Schema";
import { JsonSchema } from "@lindystack/json-schema";

const PropertyEntry = Schema.tuple(Schema.string, JsonSchema)
  .pipe(Schema.filter((value) => value.length === 2, {
    message: () => "PropertyEntry must be a tuple of length 2",
  }));

type PropertyEntry = Schema.To<typeof PropertyEntry>;

export { PropertyEntry };
