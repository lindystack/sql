import * as Schema from "@effect/schema/Schema";
import { JsonSchema } from "@lindystack/json-schema";

const Entry = Schema.tuple(Schema.string, JsonSchema);
type Entry = Schema.To<typeof Entry>;

export { Entry };
