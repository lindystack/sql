import * as Schema from "@effect/schema/Schema";
import { KEYWORD } from "../regex";

const TableName = Schema.string.pipe(Schema.pattern(KEYWORD));

const TableRef = Schema.struct({
  name: TableName,
  schema: TableName,
});

export const TableRefFromString = Schema.string.pipe(Schema.transform(
  TableRef,
  (a) => {
    const [name, schema = "public"] = a.split(".").reverse();
    return { name, schema };
  },
  (a) => `${a.schema}.${a.name}`,
));

export type TableRef = Schema.To<typeof TableRef>;

export const makeSync = Schema.decodeSync(TableRefFromString);
export const make = Schema.decode(TableRefFromString);
