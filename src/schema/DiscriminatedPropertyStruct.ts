import * as Schema from "@effect/schema/Schema";

import { PropertyStruct } from "./PropertyStruct";
import { Relation } from "./Relation";
import { Column } from "./Column";

const RelationFromPropertyStruct = PropertyStruct.pipe(
  Schema.transformResult(
    Relation,
    (relation) => Schema.parse(Relation)(relation),
    (relation) => Schema.parse(PropertyStruct)(relation),
  ),
);

const ColumnFromPropertyStruct = PropertyStruct.pipe(
  Schema.transformResult(
    Column,
    (column) => Schema.parse(Column)(column),
    (column) => Schema.parse(PropertyStruct)(column),
  ),
);

const DiscriminatedPropertyStruct = Schema.union(
  RelationFromPropertyStruct,
  ColumnFromPropertyStruct,
);

export { DiscriminatedPropertyStruct };
