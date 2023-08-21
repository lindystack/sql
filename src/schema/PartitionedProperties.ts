import * as Schema from "@effect/schema/Schema";
import { Either, ReadonlyArray } from "effect";

import { Columns } from "./Columns";
import { Relations } from "./Relations";
import { Relation } from "./Relation";
import { PropertyStructs } from "./PropertyStructs";

const isRelation = (schema: PropertyStructs[0]): schema is Relation =>
  "kind" in schema;

export const PartitionedProperties = PropertyStructs.pipe(
  Schema.transform(
    Schema.tuple(Columns, Relations),
    (propertyStructs) =>
      ReadonlyArray.partitionMap(
        propertyStructs,
        (propertyStruct) =>
          isRelation(propertyStruct)
            ? Either.right(propertyStruct)
            : Either.left(propertyStruct),
      ),
    ([c, _r]) => [...c] as const,
  ),
);

export type PartitionedProperties = Schema.To<typeof PartitionedProperties>;
