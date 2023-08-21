import * as Schema from "@effect/schema/Schema";
import { JsonSchema } from "@lindystack/json-schema";
import { PropertyEntry } from "./PropertyEntry";

const PropertyStruct = PropertyEntry.pipe(
  Schema.transform(
    Schema.struct({
      key: Schema.string,
      jsonSchema: JsonSchema,
    }),
    ([key, jsonSchema]) => ({ key, jsonSchema }),
    ({ key, jsonSchema }) => [key, jsonSchema] as const,
  ),
);

type PropertyStruct = Schema.To<typeof PropertyStruct>;

export { PropertyStruct };
