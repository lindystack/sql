import * as Schema from "@effect/schema/Schema";
import { JsonSchema } from "@lindystack/json-schema";

const $Defs = Schema.record(Schema.string, JsonSchema);
type $Defs = Schema.To<typeof $Defs>;

export { $Defs };
