import { Effect } from "effect";

import {
  Defs,
  ObjectSchema,
  PartitionedProperties,
  SelectableOptions,
  TableRef,
} from "../tag";

const makeTable = Effect.all([
  ObjectSchema,
  TableRef,
  PartitionedProperties,
  Defs,
  Effect.serviceOption(SelectableOptions),
])
  .pipe(
    Effect.map((
      [
        objectSchema,
        tableRef,
        [columns, relations],
        { $defs, lookup$Def },
        options,
      ],
    ) => ({
      schema: objectSchema,
      ref: tableRef,
      columns,
      relations,
      $defs,
      lookup$Def,
      options,
    })),
  );

export { makeTable };
