import * as Schema from "@effect/schema/Schema";
import { Primitive } from "./Primitive";

const Column = Schema.struct({
  key: Schema.string,
  jsonSchema: Primitive,
});
type Column = Schema.To<typeof Column>;

export { Column };
