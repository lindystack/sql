import * as Schema from "@effect/schema/Schema";

import { ColumnRef } from "./ColumnRef";
import { RelationRef } from "./RelationRef";

const SelectItem = Schema.union(ColumnRef, RelationRef);
type SelectItem = Schema.To<typeof SelectItem>;

export { SelectItem };
