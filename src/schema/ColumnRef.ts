import * as Schema from "@effect/schema/Schema";
import { Column } from "./Column";
import { Alias } from "./Alias";
import { TableRefFromString } from "./TableRef";

const TableRefOrAlias = Schema.union(Alias, Schema.to(TableRefFromString));

const ColumnRef = Schema.tuple(TableRefOrAlias, Column);
type ColumnRef = Schema.To<typeof ColumnRef>;

export { ColumnRef };
