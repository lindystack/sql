import * as Schema from "@effect/schema/Schema";
import { ObjectSchema } from "@lindystack/json-schema";
import { PropertyEntry } from "./PropertyEntry";

const PropertyEntries = ObjectSchema.pipe(
  Schema.transform(
    Schema.array(PropertyEntry),
    (os) => Object.entries(os.properties),
    (entries) => ({
      $id: "unknown",
      type: "object" as const,
      properties: Object.fromEntries(entries),
    }),
  ),
);

type PropertyEntries = Schema.To<typeof PropertyEntries>;
export { PropertyEntries };
