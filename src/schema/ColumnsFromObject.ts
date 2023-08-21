import * as Schema from "@effect/schema/Schema";

import { EntriesFromObject } from "./EntriesFromObject";
import { Columns } from "./Columns";

const ColumnsFromObject = EntriesFromObject.pipe(
  Schema.transform(
    Columns,
    (entries) =>
      Schema.parseSync(Columns)(
        entries.map(([key, jsonSchema]) => ({ key, jsonSchema })),
      ),
    (columns) =>
      Schema.decodeSync(EntriesFromObject)(
        columns.map(({ key, jsonSchema }) => [key, jsonSchema]),
      ),
  ),
);

export { ColumnsFromObject };
