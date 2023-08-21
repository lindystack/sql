import { Effect } from "effect";

import {
  ObjectSchema,
  PartitionedProperties,
  SelectableOptions,
  TableRef,
} from "../tag";

const makeTable = Effect.all([
  ObjectSchema,
  TableRef,
  PartitionedProperties,
  Effect.serviceOption(SelectableOptions),
])
  .pipe(
    Effect.map(([objectSchema, tableRef, [columns, relations], options]) => ({
      schema: objectSchema,
      ref: tableRef,
      columns,
      relations,
      options,
    })),
  );

export { makeTable };
