import * as Schema from "@effect/schema/Schema";
import { PropertyEntries } from "./PropertyEntries";
// import { PropertyStruct } from "./PropertyStruct";
import { DiscriminatedPropertyStruct } from "./DiscriminatedPropertyStruct";

const PropertyStructs = PropertyEntries.pipe(
  Schema.compose(Schema.array(DiscriminatedPropertyStruct)),
);

type PropertyStructs = Schema.To<typeof PropertyStructs>;

export { PropertyStructs };
