import { Context, Option } from "effect";
import { ObjectSchema } from "@lindystack/json-schema";

import type { Relations, SelectableOptions, TableRef } from "../schema";
import { type Columns } from "../schema";

export type Table = {
  ref: TableRef;
  schema: ObjectSchema;
  options: Option.Option<SelectableOptions>;
  relations: Relations;
  columns: Columns;
};

export const Table = Context.Tag<Table>();
